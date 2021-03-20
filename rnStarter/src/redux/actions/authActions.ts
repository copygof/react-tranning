import AuthService from '../../services/AuthService'
import ActionTypes from '../actionTypes'
import { Dispatcher } from '../store'

const loginRequest = () => ({
  type: ActionTypes.LOGIN_REQUEST,
})
const loginSuccess = (response: any) => ({
  type: ActionTypes.LOGIN_SUCCESS,
  payload: { ...response },
})
const loginFailure = (error: any) => ({
  type: ActionTypes.LOGIN_FAILURE,
  payload: { error },
})

function login() {
  return async (dispatch: Dispatcher) => {
    dispatch(loginRequest())

    try {
      const response = await AuthService.login('admin', '1234')
      dispatch(loginSuccess(response))
    } catch (error) {
      dispatch(loginFailure(error))
      console.log('error => ', error)
    }
  }
}

function logout() {
  return async (dispatch: Dispatcher) => {
    try {
      dispatch({ type: ActionTypes.LOGOUT })
    } catch (error) {
      console.log('error => ', error)
    }
  }
}

const AuthAction = {
  logout,
  login,
}

export default AuthAction
