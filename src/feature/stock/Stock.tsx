import {StockTable} from './StockTable/StockTable';
import {useEffect} from 'react';
import {fetchStocksTC} from './stockReducer';
import {useAppDispatch, useAppSelector} from '../../app/store';

export const Stock = () => {
  const pageCount = useAppSelector(state => state.stocks.pageCount)
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchStocksTC())
  }, [pageCount])

  return (
    <>
      <StockTable/>
    </>
  )
}