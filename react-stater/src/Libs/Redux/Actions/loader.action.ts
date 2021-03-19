import ActionType from "../@types/ActionType";
import IAction from "../@types/IAction";

const showLoading = () => (dispatch: any) => {
    dispatch({
        type: ActionType.LOADING_CHANGE,
        payload: {
            loading: true
        }
    } as IAction<any>);
};

const hideLoading = () => (dispatch: any) => {
    setTimeout(() => {
        dispatch({
            type: ActionType.LOADING_CHANGE,
            payload: {
                loading: false
            }
        } as IAction<any>);
    }, 500)
}

const LoaderAction = {
    showLoading,
    hideLoading,
}

export default LoaderAction
