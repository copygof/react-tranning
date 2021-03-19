import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import React from 'react'
import InfoIcon from '@material-ui/icons/Info'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel'
import { RootStore } from '../Libs/Redux';
import { useDispatch, useSelector } from 'react-redux';
import modalAction from '../Libs/Redux/Actions/modal.action';

export default function AlertContainer() {
  const dispatch = useDispatch()
  const isVisible = useSelector((state: RootStore) => state.modalState.isVisible)
  const type = useSelector((state: RootStore) => state.modalState.type)
  const title = useSelector((state: RootStore) => state.modalState.title)
  const body = useSelector((state: RootStore) => state.modalState.body)

  const textTitle = title ?? ""
  const textContent = body ?? ""
  const handleClose = () => dispatch(modalAction.hideModal())

  const iconStatus = {
    info: <InfoIcon className="w-9 h-9 text-info-main" />,
    success: <CheckCircleIcon className="w-9 h-9 text-success-main" />,
    warning: <InfoIcon className="w-9 h-9 text-warning-main" />,
    error: <CancelIcon className="w-9 h-9 text-error-main" />,
  }[type]

  return (
    <div>
      <Dialog
        open={isVisible}
        onClose={handleClose}
        fullWidth
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <div className="flex flex-row flex-1">
          <div>{iconStatus} </div>
          <div className="flex flex-col flex-1">
            <DialogTitle id="alert-dialog-title">{textTitle}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">{textContent}</DialogContentText>
            </DialogContent>
            <DialogActions className="mt-7">
              <Button
                className="w-20"
                onClick={handleClose}
                color="primary"
                variant="contained"
                size="large"
                autoFocus>
                OK
              </Button>
            </DialogActions>
          </div>
        </div>
      </Dialog>
    </div>
  )
}
