import {useAppSelector} from 'app/store';
import {fetchStocksType} from '../stockAPI';

import 'rsuite/dist/rsuite.min.css';
import Table from 'rsuite/Table';
import s from './stockTable.module.css'

const {Column, HeaderCell, Cell} = Table;

export const StockTable = () => {
  const stocks = useAppSelector<fetchStocksType[]>(state => state.stocks.stocksData)
  const isLoading = useAppSelector(state => state.app.loading)
  const currentStocks = stocks.slice(-10)
  const colorChanges = (change: number) => change > 0 ? s.increase : change < 0 ? s.decline : s.previous

  return (
    <Table
      height={500}
      width={1400}
      data={currentStocks}
      bordered
      loading={isLoading}>
        <Column width={50} align='center'>
          <HeaderCell>№</HeaderCell>
          <Cell dataKey='id'/>
        </Column>

        <Column width={350} align='left'>
          <HeaderCell>Company</HeaderCell>
          <Cell>
            {rowData => <span>{rowData.companyName} ({rowData.symbol})</span>}
          </Cell>
        </Column>

        <Column width={100} align='center'>
          <HeaderCell>Latest Price</HeaderCell>
          <Cell dataKey='latestPrice'/>
        </Column>

        <Column width={200} align='center'>
          <HeaderCell>Open / Close</HeaderCell>
          <Cell>
            {rowData => <span>{rowData.open} / {rowData.close}</span>}
          </Cell>
        </Column>

        <Column width={125} align='center'>
          <HeaderCell>Change</HeaderCell>
          <Cell>
            {rowData => (
              <span className={colorChanges(rowData.change)}>
                {rowData.change.toFixed(2)}
              </span>
            )}
          </Cell>
        </Column>

        <Column width={125} align='center'>
          <HeaderCell>Change %</HeaderCell>
          <Cell>
            {rowData => (
              <span className={colorChanges(rowData.change)}>
                {rowData.changePercent.toFixed(2)} %
              </span>
            )}
          </Cell>
        </Column>

        <Column width={150} align='center'>
          <HeaderCell>Low / High Year</HeaderCell>
          <Cell>
            {rowData => <span>{rowData.week52Low} / {rowData.week52High}</span>}
          </Cell>
        </Column>

        <Column width={200} align='center'>
          <HeaderCell>Market Cap</HeaderCell>
          <Cell>
            {rowData => <span>{rowData.marketCap.toLocaleString('ru-RU')}$</span>}
          </Cell>
        </Column>

        <Column width={100} align='center'>
          <HeaderCell>Latest Time</HeaderCell>
          <Cell dataKey='latestTime'/>
        </Column>
    </Table>
  );
};