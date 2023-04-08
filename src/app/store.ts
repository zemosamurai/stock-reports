import {AnyAction, combineReducers} from 'redux';
import { stockReducer } from '../feature/stock/stockReducer';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

export const rootReducer = combineReducers({
  stocks: stockReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

export type AppRootStateType = ReturnType<typeof rootReducer>
export type AppThunkDispatchType = ThunkDispatch<AppRootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<AppThunkDispatchType>()
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector