import s from './stockTable.module.css';

type PropsType = {
  position: number
  companyName: string
  symbol: string
  latestPrice: number
  open: number
  close: number
  change: number
  changePercent: number
  marketCap: number
  latestTime: string
  week52Low: number
  week52High: number
}

export const TBodyRow = (props: PropsType) => {
  const {
    position, companyName, symbol, latestPrice, open,
    close, change, changePercent, marketCap, latestTime, week52High, week52Low
  } = props

  const colorChanges = change > 0 ? s.increase : change < 0 ? s.decline : s.previous

  return (
    <tr>
      <td>{position}</td>
      <td>{companyName} ({symbol})</td>
      <td>{latestPrice.toFixed(2)}</td>
      <td>{open.toFixed(2)} / {close.toFixed(2)}</td>
      <td className={colorChanges}>{change.toFixed(2)}</td>
      <td className={colorChanges}>{changePercent.toFixed(2)}%</td>
      <td>{week52Low.toFixed(2)} / {week52High.toFixed(2)}</td>
      <td>{marketCap.toLocaleString('ru-RU')}$</td>
      <td>{latestTime}</td>
    </tr>
  );
};