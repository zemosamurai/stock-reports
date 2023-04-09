import {instance} from 'common/instance/instance';

const MY_IEX_API_KEY = 'pk_1eb501d7a94449c98642a5cc333ade40'

export const stockAPI = {
  fetchStocks(page: number) {
    return instance.get(`stable/stock/market/list/mostactive`, {
      params: {
        token: MY_IEX_API_KEY,
        displayPercent: true,
        listLimit: page
      }
    })
  }
}

export type fetchStocksType = {
  avgTotalVolume: number
  calculationPrice: string
  change: number
  changePercent: number
  close: number
  closeSource: string
  closeTime: number
  companyName: string
  currency: string
  delayedPrice: number
  delayedPriceTime: number
  extendedChange: number
  extendedChangePercent: number
  extendedPrice: number
  extendedPriceTime: number
  high: number
  highSource: string
  highTime: number
  iexAskPrice: null
  iexAskSize: null
  iexBidPrice: null
  iexBidSize: null
  iexClose: number
  iexCloseTime: number
  iexLastUpdated: null
  iexMarketPercent: null
  iexOpen: number
  iexOpenTime: number
  iexRealtimePrice: null
  iexRealtimeSize: null
  iexVolume: null
  lastTradeTime: number
  latestPrice: number
  latestSource: string
  latestTime: string
  latestUpdate: number
  latestVolume: number
  low: number
  lowSource: string
  lowTime: number
  marketCap: number
  oddLotDelayedPrice: number
  oddLotDelayedPriceTime: number
  open: number
  openTime: number
  openSource: string
  peRatio: number
  previousClose: number
  previousVolume: number
  primaryExchange: string
  symbol: string
  volume: number
  week52High: number
  week52Low: number
  ytdChange: number
  isUSMarketOpen: boolean
}

