/**
 * Action type
 */

enum ActionTypes {
  /** Initial  */
  INITIAL_DATA = 'INITIAL_DATA',

  /** Login  */
  LOGIN_REQUEST = 'LOGIN_REQUEST',
  LOGIN_SUCCESS = 'LOGIN_SUCCESS',
  LOGIN_FAILURE = 'LOGIN_FAILURE',

  /** Logout  */
  LOGOUT = 'LOGOUT',

  /** Setting  */
  SETTING_INIT = 'SETTING_INIT',
  SETTING_CHANGE = 'SETTING_CHANGE',
  // auto-plugin
}

export interface IAction<T> {
  type: ActionTypes
  payload?: T
}

export default ActionTypes
