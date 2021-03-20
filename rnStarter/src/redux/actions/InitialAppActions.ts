import ActionTypes from '../actionTypes'
import { Dispatcher } from '../store'

const loadAppData = (isLoaded: boolean) => (dispatch: Dispatcher) => {
  dispatch({
    type: ActionTypes.INITIAL_DATA,
    payload: {
      isLoaded,
    },
  })
}

const viewWalkThrough = () => (dispatch: Dispatcher) => {
  dispatch({
    type: ActionTypes.INITIAL_DATA,
    payload: {
      hasViewWalkThrough: true,
    },
  })
}

const InitialAppAction = {
  loadAppData,
  viewWalkThrough,
}

export default InitialAppAction
