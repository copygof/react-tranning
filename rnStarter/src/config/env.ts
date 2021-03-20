// @ts-nocheck
import Config from 'react-native-config'
import { name as appName } from '../../app.json'

console.log('Config => ', Config)

/**
 *  Environment variables
 */
const {
  REACT_APP_APPCENTER_BUILD_ID,
  REACT_APP_BUNDLE_ID,
  REACT_APP_DEEP_LINK_SCHEME,
  REACT_APP_ENVIRONMENT,
  REACT_APP_API_URL,
} = Config

const envList = [
  { REACT_APP_APPCENTER_BUILD_ID },
  { REACT_APP_BUNDLE_ID },
  { REACT_APP_DEEP_LINK_SCHEME },
  { REACT_APP_ENVIRONMENT },
  { REACT_APP_API_URL },
]
const checkEnvVariableIsEmpty = (envVar: any) => !!!Object.values(envVar)[0]
const hasSomeVariableEmpty = envList.some(checkEnvVariableIsEmpty)

if (hasSomeVariableEmpty) {
  const variableKeyIsEmptyValue = envList
    .filter(checkEnvVariableIsEmpty)
    .map(Object.keys)
    .join(', ')

  throw new Error(
    `App can not read environment file.\nMissing value of:\n${variableKeyIsEmptyValue}`,
  )
}

/**
 * Expose project configuration
 */
export default {
  // Get from app center build
  appBuildId: REACT_APP_APPCENTER_BUILD_ID, // TODO wait for prove it working and we can control build id or not
  // Project Name
  name: appName,
  // bundle Id,
  bundleId: REACT_APP_BUNDLE_ID,
  // App scheme for linking
  scheme: `${REACT_APP_DEEP_LINK_SCHEME}://`,
  // env
  env: REACT_APP_ENVIRONMENT,
  // Base url
  baseUrl: REACT_APP_API_URL,
}
