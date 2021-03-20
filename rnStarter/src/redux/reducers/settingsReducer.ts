import { SettingsState } from '../@types/Settings'
import ActionTypes, { IAction } from '../actionTypes'

const initialState: SettingsState = {
  currentLanguage: '',
  deviceLanguage: '',
}

const settingsReducer = (
  state = initialState,
  actions: IAction<SettingsState>,
): SettingsState => {
  switch (actions.type) {
    case ActionTypes.SETTING_INIT: {
      return {
        ...initialState,
        ...actions.payload,
      }
    }
    case ActionTypes.SETTING_CHANGE: {
      return {
        ...state,
        ...actions.payload,
      }
    }
    default:
      return state
  }
}

export default settingsReducer
