import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import env from '../config/env'
import InitialAppAction from '../redux/actions/InitialAppActions'
import { RootState } from '../redux/store'
import { LoadingScreen } from '../screen'
import AuthNavigation from './AuthNavigation'
import HomeNavigation from './HomeNavigation'

const RootStack = createStackNavigator()

function RootNavigation() {
  const dispatch = useDispatch()
  const userToken = useSelector((state: RootState) => state.auth.token)
  const isLoading = useSelector((state: RootState) => state.initialApp.isLoaded)

  useEffect(() => {
    dispatch(InitialAppAction.loadAppData(true))

    setTimeout(() => {
      dispatch(InitialAppAction.loadAppData(false))
    }, 1500)
  }, [dispatch])

  if (isLoading) {
    return <LoadingScreen />
  }

  return (
    <NavigationContainer linking={{ prefixes: [env.scheme] }}>
      <RootStack.Navigator headerMode="none">
        {userToken === '' ? (
          <>
            <RootStack.Screen
              name="Auth"
              component={AuthNavigation}
              options={{
                animationTypeForReplace: userToken === '' ? 'pop' : 'push',
              }}
            />
          </>
        ) : (
          <>
            <RootStack.Screen name="Home" component={HomeNavigation} />
          </>
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default RootNavigation
