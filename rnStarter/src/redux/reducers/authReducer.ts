import { AuthState } from '../@types/AuthState'
import ActionTypes, { IAction } from '../actionTypes'

export const initialState: AuthState = {
  isLoading: false,
  token: '',
  userInfo: {},
  error: {},
}

const authReducer = (
  state = initialState,
  actions: IAction<any>,
): AuthState => {
  switch (actions.type) {
    case ActionTypes.LOGIN_REQUEST: {
      return {
        ...initialState,
        isLoading: true,
      }
    }
    case ActionTypes.LOGIN_SUCCESS: {
      return {
        ...initialState,
        isLoading: false,
        userInfo: actions.payload.userInfo,
        token: actions.payload.token,
      }
    }
    case ActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: actions.payload.error,
      }
    }
    default:
      return state
  }
}

export default authReducer
