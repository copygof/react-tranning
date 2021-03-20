import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  applyMiddleware,
  combineReducers,
  compose,
  createStore,
  Middleware,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { persistReducer, persistStore } from 'redux-persist'
import thunk, { ThunkDispatch } from 'redux-thunk'
import env from '../config/env'
import ActionTypes, { IAction } from './actionTypes'
import authReducer from './reducers/authReducer'
import initialAppReducer from './reducers/initialAppReducer'
import settingsReducer from './reducers/settingsReducer'
// auto-import

const devToolOption = {
  name: `${env.name}_FE_MB`,
  instanceId: 1,
}

const persistConfig = {
  key: 'root',
  timeout: 0,
  storage: AsyncStorage,
  whitelist: ['initialApp'],
}

const initialAppPersistConfig = {
  key: 'initialApp',
  timeout: 0,
  storage: AsyncStorage,
  whitelist: [],
}

const rootReducer = combineReducers({
  initialApp: persistReducer(initialAppPersistConfig, initialAppReducer),
  settings: settingsReducer,
  auth: authReducer,
  // auto-plugin
})

export default function configureStore() {
  const composeDevToolsWithOption = composeWithDevTools(devToolOption)
  const composeEnhancers = (__DEV__ && composeDevToolsWithOption) || compose

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const appReducer = (state: any, action: any) => {
    if (action.type === ActionTypes.LOGOUT) {
      AsyncStorage.removeItem('persist:root')
      state = { _persist: state._persist, settings: state.settings }
    }
    return persistedReducer(state, action)
  }

  const middleware: Middleware[] = [thunk]
  if (__DEV__) {
    middleware.push(logger)
  }

  const enhancer = composeEnhancers(applyMiddleware(...middleware))
  const store = createStore(appReducer, enhancer)
  const persistor = persistStore(store)
  return { store, persistor }
}

export type RootState = ReturnType<typeof rootReducer>
export type Dispatcher = ThunkDispatch<RootState, unknown, IAction<any>>
export type GetState = () => RootState
