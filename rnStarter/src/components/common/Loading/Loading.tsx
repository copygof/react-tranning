import React, { memo } from 'react'
import { ActivityIndicator, View } from 'react-native'
import { useTheme } from 'react-native-paper'
import styles from './styles'

/**
 * Define component props type
 */
export type LoadingProps = {}

const Loading = ({}: LoadingProps) => {
  const { colors } = useTheme()
  return (
    <View style={styles.loading}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  )
}

/**
 * Default props
 */
Loading.defaultProps = {}

export default memo(Loading)
