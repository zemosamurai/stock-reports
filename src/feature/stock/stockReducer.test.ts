import {InitialStateType, setPageCountAC, setStocksRequestAC, stockReducer} from './stockReducer';
import {fetchStocksType} from 'feature/stock/stockAPI';

let startState: InitialStateType

beforeEach(() => {
  startState = {
    stocksData: [],
    pageCount: 10
  }
})

test('value stocks should be added', () => {
  const data: fetchStocksType[] = [{
    avgTotalVolume: 135981249,
    calculationPrice: "close",
    change: -0.46,
    changePercent: -0.248,
    close: 185.06,
    closeSource: "official",
    closeTime: 1680811200039,
    companyName: "Tesla Inc",
    currency: "USD",
    delayedPrice: 185.11,
    delayedPriceTime: 1680811181474,
    extendedChange: -0.06,
    extendedChangePercent: -0.032,
    extendedPrice: 185,
    extendedPriceTime: 1680825599528,
    high: 185.06,
    highSource: "Close",
    highTime: 1680811200039,
    iexAskPrice: null,
    iexAskSize: null,
    iexBidPrice: null,
    iexBidSize: null,
    iexClose: 185.03,
    iexCloseTime: 1680811199003,
    iexLastUpdated: null,
    iexMarketPercent: null,
    iexOpen: 182.9,
    iexOpenTime: 1680787800391,
    iexRealtimePrice: null,
    iexRealtimeSize: null,
    iexVolume: null,
    isUSMarketOpen: false,
    lastTradeTime: 1680811199934,
    latestPrice: 185.06,
    latestSource: "Close",
    latestTime: "April 6, 2023",
    latestUpdate: 1680811200039,
    latestVolume: 123857932,
    low: 185.06,
    lowSource: "Close",
    lowTime: 1680811200000,
    marketCap: 579879966528,
    oddLotDelayedPrice: 185.11,
    oddLotDelayedPriceTime: 1680811181473,
    open: 183,
    openSource: "official",
    openTime: 1680787801813,
    peRatio: 51.12,
    previousClose: 185.52,
    previousVolume: 133882493,
    primaryExchange: "NASDAQ",
    symbol: "TSLA",
    volume: 123857932,
    week52High: 364.07,
    week52Low: 101.81,
    ytdChange: 49.98742782919304,
  }]
  const endState = stockReducer(startState, setStocksRequestAC(data))

  expect(endState.stocksData.length).toBe(1)
  expect(endState.stocksData[0]).toEqual({...data[0], id: 1})
  expect(endState.pageCount).toBe(10)
})
test('value pageCount should be changed', () => {
  const endState = stockReducer(startState, setPageCountAC(5))

  expect(endState.pageCount).toBe(5)
  expect(endState.stocksData.length).toBe(0)
})