import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'app/store';
import {createPortal} from 'react-dom';
import {setErrorAC} from 'app/appReducer';
import CloseIcon from '@rsuite/icons/legacy/Close';
import s from './errorSnackbar.module.css'

export const ErrorSnackbar = () => {
  const error = useAppSelector(state => state.app.error)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (!!error) {
      // delay before closing
      setTimeout(() => handleClose(), 3000)
    }
  }, [error])

  const handleClose = () => {
    dispatch(setErrorAC(null))
  }

  if (!error) return null

  return createPortal(
    <div className={s.wrapper}>
      <p className={s.textError}>{error}</p>
      <CloseIcon onClick={handleClose} className={s.closeIcon}/>
    </div>,
    document.body
  )
};