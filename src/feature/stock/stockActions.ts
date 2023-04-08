import axios from 'axios';
import {Dispatch} from 'redux';

export const FETCH_STOCKS_REQUEST = 'FETCH_STOCKS_REQUEST';
export const FETCH_STOCKS_SUCCESS = 'FETCH_STOCKS_SUCCESS';
export const FETCH_STOCKS_FAILURE = 'FETCH_STOCKS_FAILURE';
const REACT_APP_IEX_API_KEY = 'pk_1eb501d7a94449c98642a5cc333ade40'

export const fetchStocksRequest = () => ({type: FETCH_STOCKS_REQUEST});
export const fetchStocksSuccess = (stocks: any) => ({type: FETCH_STOCKS_SUCCESS, payload: stocks});
export const fetchStocksFailure = (error: any) => ({type: FETCH_STOCKS_FAILURE, payload: error});

export const fetchStocks = (page: number) => {
  return (dispatch: Dispatch) => {
    dispatch(fetchStocksRequest());
    axios.get(`https://cloud.iexapis.com/stable/stock/market/list/mostactive?token=${REACT_APP_IEX_API_KEY}`)
      .then(response => {
        const stocks = response.data;
        console.log(stocks)
        dispatch(fetchStocksSuccess(stocks));
      })
      .catch(error => {
        dispatch(fetchStocksFailure(error.message));
      });
  };
};