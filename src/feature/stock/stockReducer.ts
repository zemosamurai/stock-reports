import {FETCH_STOCKS_REQUEST, FETCH_STOCKS_SUCCESS, FETCH_STOCKS_FAILURE} from './stockActions';

const initialState = {
  loading: false,
  stocks: [],
  error: ''
};

export const stockReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_STOCKS_REQUEST:
      return {...state, loading: true};
    case FETCH_STOCKS_SUCCESS:
      return {...state, loading: false, stocks: action.payload, error: ''};
    case FETCH_STOCKS_FAILURE:
      return {...state, loading: false, stocks: [], error: action.payload};
    default:
      return state;
  }
};