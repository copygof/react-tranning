import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { RootStackParamList } from '../../navigation/@types/RootStack'
import AuthAction from '../../redux/actions/authActions'
import styles from './styles'

type LoginNavigationScreen = StackNavigationProp<RootStackParamList, 'Login'>
type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>
export type LoginScreenProps = {
  route: LoginScreenRouteProp
  navigation: LoginNavigationScreen
}

export default function LoginScreen(props: LoginScreenProps) {
  const dispatch = useDispatch()
  const handleLogin = async () => {
    dispatch(AuthAction.login())
  }

  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <View style={styles.height} />
      <Button mode="contained" onPress={handleLogin}>
        Login
      </Button>
    </View>
  )
}
