import { InitialAppState } from '../@types/InitialAppState'
import ActionTypes, { IAction } from '../actionTypes'

export const initialState: InitialAppState = {
  isLoaded: false,
  hasViewWalkThrough: false,
}

const initialAppReducer = (
  state = initialState,
  actions: IAction<InitialAppState>,
): InitialAppState => {
  switch (actions.type) {
    case ActionTypes.INITIAL_DATA: {
      return {
        ...state,
        ...actions.payload,
      }
    }
    default:
      return state
  }
}

export default initialAppReducer
