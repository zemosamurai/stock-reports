import {Dispatch} from 'redux';
import {fetchStocksType, stockAPI} from './stockAPI';
import {RootStateType} from '../../app/store';
import {setLoadingAC} from '../../app/appReducer';

export enum page {
  size = 10,
  minimalSize = 10
}

const initialState = {
  stocksData: [] as fetchStocksType[],
  pageCount: 10
};

export const stockReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case 'SET_STOCKS_REQUEST':
      return {...state, stocksData: action.payload};
    case 'SET_PAGE_COUNT':
      return {...state, pageCount: action.payload}
    default:
      return state;
  }
};

export const fetchStocksTC = () => async (dispatch: Dispatch, getState: () => RootStateType) => {
  try {
    dispatch(setLoadingAC(true))
    const pageCount = getState().stocks.pageCount
    const res = await stockAPI.fetchStocks(pageCount)
    dispatch(setStocksRequestAC(res.data))
  } catch (e) {

  } finally {
    dispatch(setLoadingAC(false))
  }
}

export const setStocksRequestAC = (stocks: fetchStocksType[]) => ({
  type: 'SET_STOCKS_REQUEST',
  payload: stocks
} as const);
export const setPageCountAC = (pageCount: number) => ({
  type: 'SET_PAGE_COUNT',
  payload: pageCount
} as const);

type InitialStateType = typeof initialState
type ActionsType =
  | ReturnType<typeof setStocksRequestAC>
  | ReturnType<typeof setPageCountAC>