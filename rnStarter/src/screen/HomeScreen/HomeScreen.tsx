import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import env from '../../config/env'
import useAuth from '../../hooks/useAuth'
import { RootStackParamList } from '../../navigation/@types/RootStack'
import AuthActions from '../../redux/actions/authActions'
import styles from './styles'

type HomeNavigationScreen = StackNavigationProp<RootStackParamList, 'Home'>
type HomeScreenRouteProp = RouteProp<RootStackParamList, 'Home'>
export type HomeScreenProps = {
  route: HomeScreenRouteProp
  navigation: HomeNavigationScreen
}

export default function HomeScreen(props: HomeScreenProps) {
  const dispatch = useDispatch()
  const { i18n } = useTranslation()
  const { signOut } = useAuth()

  const handleLogout = () => {
    signOut()
    dispatch(AuthActions.logout())
  }

  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <Text>App env: {env.env}</Text>
      <Text>Test i18n: {i18n.t('appName')}</Text>
      <Text>languages: {i18n.t('common:ok')}</Text>
      {['en', 'th'].map((lang) => (
        <Button key={lang} onPress={() => i18n.changeLanguage(lang)}>
          {`Change to: ${lang}`}
        </Button>
      ))}
      <Button mode="contained" onPress={handleLogout}>
        SignOut
      </Button>
      <Button
        style={{ marginTop: 8 }}
        mode="contained"
        onPress={() => {
          props.navigation.navigate('ScreenInSideTab')
        }}
      >
        Screen inside tab
      </Button>
      <Button
        style={{ marginTop: 8 }}
        mode="contained"
        onPress={() => {
          props.navigation.navigate('ScreenOutSideTab')
        }}
      >
        Screen outside tab
      </Button>
      <Button
        style={{ marginTop: 8 }}
        mode="contained"
        onPress={() => {
          props.navigation.navigate('Settings')
        }}
      >
        Goto tab setting
      </Button>
      <Button
        style={{ marginTop: 8 }}
        mode="contained"
        onPress={() => {
          props.navigation.navigate('Profile', {
            screen: 'Profile3',
          })
        }}
      >
        Goto other screen inside other tab
      </Button>
    </View>
  )
}
