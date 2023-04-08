export const StockTable = ({stocks}: any) => {
  return (
    <table className="stock-table">
      <thead>
      <tr>
        <th>Symbol</th>
        <th>Company Name</th>
        <th>Price</th>
        <th>Change</th>
        <th>Change %</th>
      </tr>
      </thead>
      <tbody>
      {stocks && stocks.map((stock: any) => (
        <tr key={stock.symbol}>
          <td>{stock.symbol}</td>
          <td>{stock.companyName}</td>
          <td>{stock.latestPrice.toFixed(2)}</td>
          <td>{stock.change.toFixed(2)}</td>
          <td>{(stock.changePercent * 100).toFixed(2)}%</td>
        </tr>
      ))}
      </tbody>
    </table>
  );
};