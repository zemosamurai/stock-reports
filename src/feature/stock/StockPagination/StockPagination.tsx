import {useAppDispatch, useAppSelector} from 'app/store';
import {fetchStocksType} from '../stockAPI';
import {page, setPageCountAC} from '../stockReducer';

import {IconButton} from 'rsuite';
import PageNext from '@rsuite/icons/legacy/PageNext';
import PagePrev from '@rsuite/icons/legacy/PagePrevious';
import Home from '@rsuite/icons/legacy/Home';
import s from './StockPagination.module.css'

export const StockPagination = () => {
  const stocks = useAppSelector<fetchStocksType[]>(state => state.stocks.stocksData)
  const pageCount = useAppSelector(state => state.stocks.pageCount)
  const isLoading = useAppSelector(state => state.app.loading)
  const dispatch = useAppDispatch()

  const handleHomePage = () => {
    dispatch(setPageCountAC(page.size))
  }
  const handlePrevPage = () => {
    if (stocks.length === page.minimalSize) return
    dispatch(setPageCountAC(pageCount - page.size))
  }
  const handleNextPage = () => {
    dispatch(setPageCountAC(pageCount + page.size))
  }

  return (
    <div className={s.container}>
      <IconButton
        onClick={handleHomePage}
        disabled={isLoading || stocks.length === page.minimalSize}
        icon={<Home/>}
        placement='left'
      >
        Home
      </IconButton>
      <div className={s.wrapper}>
        <IconButton
          onClick={handlePrevPage}
          disabled={isLoading || stocks.length === page.minimalSize}
          icon={<PagePrev/>}
          placement='left'
        >
          Prev
        </IconButton>
        <IconButton
          onClick={handleNextPage}
          disabled={isLoading}
          icon={<PageNext/>}
          placement='right'
        >
          Next
        </IconButton>
      </div>
    </div>
  );
};
