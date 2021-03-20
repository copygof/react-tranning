import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { LoginScreen, WelcomeScreen } from '../screen'

const AuthStack = createStackNavigator()

function AuthNavigation() {
  return (
    <AuthStack.Navigator initialRouteName="Welcome">
      <AuthStack.Screen name="Welcome" component={WelcomeScreen} />
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="LoginSuccess" component={LoginScreen} />
    </AuthStack.Navigator>
  )
}

export default AuthNavigation
