import { DefaultTheme } from 'react-native-paper'

declare global {
  namespace ReactNativePaper {
    interface ThemeColors {
      onPrimary: string
    }

    interface Theme {
      // myOwnProperty: boolean
    }
  }
}

const defaultTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#222326',
    accent: 'rgb(237, 39, 34)',
    onPrimary: '#ffffff',
  },
}

export default defaultTheme
