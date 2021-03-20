import { StyleSheet } from 'react-native'
import { useTheme } from 'react-native-paper'

const useStyles = (props: any) => {
  const { colors } = useTheme()

  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: props.isVisible ? colors.accent : colors.primary,
    },
    headline: {
      color: colors.onPrimary,
    },
  })
}

export default useStyles
