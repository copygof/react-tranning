import React from 'react'
import { StatusBar, View } from 'react-native'
import { Button, Headline, useTheme } from 'react-native-paper'
import styles from './styles'

export default function WelcomeScreen() {
  const { colors } = useTheme()

  const handlePressNext = () => {}

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.primary} />
      <Headline>Welcome screen</Headline>
      <Button mode="contained" onPress={handlePressNext}>
        Next
      </Button>
    </View>
  )
}
