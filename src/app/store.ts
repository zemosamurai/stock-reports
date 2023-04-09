import {AnyAction, combineReducers} from 'redux';
import { stockReducer } from 'feature/stock/stockReducer';
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunkMiddleware, {ThunkDispatch} from 'redux-thunk';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {appReducer} from 'app/appReducer';

export const rootReducer = combineReducers({
  app: appReducer,
  stocks: stockReducer
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

export type RootStateType = ReturnType<typeof rootReducer>
export type ThunkDispatchType = ThunkDispatch<RootStateType, any, AnyAction>

export const useAppDispatch = () => useDispatch<ThunkDispatchType>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector

// @ts-ignore
window.store = store