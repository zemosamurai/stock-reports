import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from 'app/store';
import {fetchStocksTC} from './stockReducer';
import {StockTable} from './StockTable/StockTable';
import {StockPagination} from './StockPagination/StockPagination';
import s from './stock.module.css'
import {ErrorSnackbar} from 'common/components/ErrorSnackbar/ErrorSnackbar';

export const Stock = () => {
  const pageCount = useAppSelector(state => state.stocks.pageCount)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchStocksTC())
  }, [pageCount])

  return (
    <div className={s.container}>
      <StockTable/>
      <StockPagination/>
      <ErrorSnackbar/>
    </div>
  )
}