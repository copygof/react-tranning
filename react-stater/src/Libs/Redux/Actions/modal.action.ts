import { Dispatch } from "redux";
import ActionType from "../@types/ActionType";
import IAction from "../@types/IAction";

type ModalContentType = {
  title: string,
  body: string
}

const showModalSuccess = (content: ModalContentType) => (dispatch: Dispatch<IAction<any>>) => {
  dispatch({ type: ActionType.MODAL_CHANGE, payload: { isVisible: true, type: 'success', ...content } })
}

const showModalInfo = (content: ModalContentType) => (dispatch: Dispatch<IAction<any>>) => {
  dispatch({ type: ActionType.MODAL_CHANGE, payload: { isVisible: true, type: 'info', ...content } })
}

const showModalWarning = (content: ModalContentType) => (dispatch: Dispatch<IAction<any>>) => {
  dispatch({ type: ActionType.MODAL_CHANGE, payload: { isVisible: true, type: 'warning', ...content } })
}

const showModalError = (content: ModalContentType) => (dispatch: Dispatch<IAction<any>>) => {
  dispatch({ type: ActionType.MODAL_CHANGE, payload: { isVisible: true, type: 'error', ...content } })
}

const hideModal = () => (dispatch: Dispatch<IAction<any>>) => {
  dispatch({ type: ActionType.MODAL_CHANGE, payload: { isVisible: false } })
}

const ModalAction = {
  showModalSuccess,
  showModalInfo,
  showModalWarning,
  showModalError,
  hideModal,
}

export default ModalAction
