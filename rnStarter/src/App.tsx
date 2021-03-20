import * as React from 'react'
import { I18nextProvider } from 'react-i18next'
import { Provider as PaperProvider } from 'react-native-paper'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import './config/axios'
import i18n from './config/i18n'
import { AuthProvider } from './context/AuthContext'
import RootNavigation from './navigation/RootNavigation'
import configureStore from './redux/store'
import defaultTheme from './theme/defaultTheme'
import './utils/mockServer'

const { store, persistor } = configureStore()

function App() {
  return (
    <PaperProvider theme={defaultTheme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <I18nextProvider i18n={i18n}>
            <SafeAreaProvider>
              <AuthProvider>
                <RootNavigation />
              </AuthProvider>
            </SafeAreaProvider>
          </I18nextProvider>
        </PersistGate>
      </Provider>
    </PaperProvider>
  )
}

export default App
