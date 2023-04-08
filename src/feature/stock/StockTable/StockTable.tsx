import {useAppDispatch, useAppSelector} from '../../../app/store';
import {fetchStocksType} from '../stockAPI';
import {page, setPageCountAC} from '../stockReducer';
import s from './stockTable.module.css'
import {THead} from './THead';
import {TBodyRow} from './TBodyRow';
import {useState} from 'react';
import {Loading} from '../../../common/components/Loading/Loading';

export const StockTable = () => {
  const stocks = useAppSelector<fetchStocksType[]>(state => state.stocks.stocksData)
  const pageCount = useAppSelector(state => state.stocks.pageCount)
  const isLoading = useAppSelector(state => state.app.loading)
  const dispatch = useAppDispatch()

  const currentStocks = stocks.slice(-10)
  const [startIndex, setCurrentIndex] = useState(0)

  const handlePrevPage = () => {
    if (stocks.length === page.minimalSize) return
    dispatch(setPageCountAC(pageCount - page.size))
    setCurrentIndex(startIndex - page.size)
  }
  const handleNextPage = () => {
    dispatch(setPageCountAC(pageCount + page.size))
    setCurrentIndex(startIndex + page.size)
  }

  return (
    <div className={s.container}>
      <table className={s.table}>
        <THead/>
        <tbody>
        {isLoading && <tr className={s.loader_row}><td className={s.loader}><Loading/></td></tr>}

        {currentStocks.map((stock: fetchStocksType, index) => (
          <TBodyRow
            key={stock.symbol}
            symbol={stock.symbol}
            open={stock.open}
            change={stock.change}
            close={stock.close}
            changePercent={stock.changePercent}
            companyName={stock.companyName}
            marketCap={stock.marketCap}
            latestTime={stock.latestTime}
            latestPrice={stock.latestPrice}
            position={index + startIndex + 1} // for current row number
            week52High={stock.week52High}
            week52Low={stock.week52Low}
          />
        ))}
        </tbody>
      </table>

      <button disabled={!startIndex || isLoading} onClick={handlePrevPage}>prev</button>
      <button disabled={isLoading} onClick={handleNextPage}>next</button>
    </div>
  );
};