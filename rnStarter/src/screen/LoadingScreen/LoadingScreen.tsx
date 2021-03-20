import React from 'react'
import { StatusBar, View } from 'react-native'
import { Headline, useTheme } from 'react-native-paper'
import useStyles from './styles'

export default function LoadingScreen() {
  const { colors } = useTheme()
  const styles = useStyles({})

  return (
    <View style={[styles.container, {}]}>
      <StatusBar backgroundColor={colors.primary} />
      <Headline style={styles.headline}>Loading...</Headline>
    </View>
  )
}
