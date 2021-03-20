import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import { Text, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { HomeScreen } from '../screen'

const HomeStack = createStackNavigator()
const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const mockScreen = (screenName: string) => () => (
  <View>
    <Text>{screenName}</Text>
  </View>
)

const HomeTab = () => {
  const { colors } = useTheme()
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="home"
              size={25}
              color={focused ? colors.accent : colors.primary}
            />
          ),
        }}
      >
        {() => (
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen
              name="ScreenInSideTab"
              component={mockScreen('ScreenInSideTab')}
            />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="people"
              size={25}
              color={focused ? colors.accent : colors.primary}
            />
          ),
        }}
      >
        {() => (
          <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Profile" component={mockScreen('Profile1')} />
            <Stack.Screen name="Profile2" component={mockScreen('Profile2')} />
            <Stack.Screen name="Profile3" component={mockScreen('Profile3')} />
          </Stack.Navigator>
        )}
      </Tab.Screen>
      <Tab.Screen
        name="Settings"
        component={mockScreen('Settings')}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="settings"
              size={25}
              color={focused ? colors.accent : colors.primary}
            />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

function HomeNavigation() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Main"
        component={HomeTab}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="ScreenOutSideTab"
        component={mockScreen('ScreenOutSideTab')}
      />
    </HomeStack.Navigator>
  )
}

export default HomeNavigation
