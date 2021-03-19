import ActionType from "../@types/ActionType";
import IAction from "../@types/IAction";

export interface IModalState {
  isVisible: boolean
  type: 'success' | 'warning' | 'info' | 'error'
  title: string
  body: string
}

const initialState: IModalState = {
  isVisible: false,
  type: 'success',
  title: '',
  body: '',
};

const reducer = (
  state: IModalState = initialState,
  action: IAction<any>
): IModalState => {
  switch (action.type) {
    case ActionType.MODAL_CHANGE:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state
  }
};

export default reducer;
