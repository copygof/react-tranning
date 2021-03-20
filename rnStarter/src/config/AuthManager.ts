import AsyncStorage from '@react-native-async-storage/async-storage'
import dayjs from 'dayjs'
import { AuthConfiguration, authorize, refresh } from 'react-native-app-auth'
import env from './env'

const CLIENT_ID = env.azure?.clientId
const TENANT_ID = env.azure?.tenantId
const REDIRECT_URL = env.azure?.redirectUrl
const API_SCOPE = env.azure?.scopeURL?.api

const config: AuthConfiguration = {
  clientId: CLIENT_ID,
  redirectUrl: REDIRECT_URL || '',
  scopes: ['openid', 'offline_access' /*, API_SCOPE */],
  additionalParameters: { prompt: 'select_account' }, //  prompt: 'login'
  serviceConfiguration: {
    authorizationEndpoint: `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/authorize`,
    tokenEndpoint: `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/token`,
    revocationEndpoint: `https://login.microsoftonline.com/${TENANT_ID}/oauth2/v2.0/logout`,
  },
  usePKCE: true,
}

export default class AuthManager {
  static signInAsync = async () => {
    const result = await authorize(config)

    console.log('result => ', result)
    console.log(result.accessToken)

    // Store the access token, refresh token, and expiration time in storage
    await AsyncStorage.setItem('userToken', result.accessToken)
    await AsyncStorage.setItem('refreshToken', result.refreshToken)
    await AsyncStorage.setItem('expireTime', result.accessTokenExpirationDate)
  }

  static signOutAsync = async () => {
    // Clear storage
    await AsyncStorage.removeItem('userToken')
    await AsyncStorage.removeItem('refreshToken')
    await AsyncStorage.removeItem('expireTime')
  }

  static getAccessTokenAsync = async () => {
    const expireTime = await AsyncStorage.getItem('expireTime')

    if (expireTime !== null) {
      // Get expiration time - 5 minutes
      // If it's <= 5 minutes before expiration, then refresh
      const expire = dayjs(expireTime).subtract(5, 'minutes')
      const now = dayjs()

      if (now.isAfter(expire)) {
        // Expired, refresh
        console.log('Refreshing token')
        const refreshToken = await AsyncStorage.getItem('refreshToken')
        console.log(`Refresh token: ${refreshToken}`)
        const result = await refresh(config, {
          refreshToken: refreshToken || '',
        })

        // Store the new access token, refresh token, and expiration time in storage
        await AsyncStorage.setItem('userToken', result.accessToken)
        await AsyncStorage.setItem('refreshToken', result.refreshToken || '')
        await AsyncStorage.setItem(
          'expireTime',
          result.accessTokenExpirationDate,
        )

        return result.accessToken
      }

      // Not expired, just return saved access token
      const accessToken = await AsyncStorage.getItem('userToken')
      return accessToken
    }

    return null
  }
}
