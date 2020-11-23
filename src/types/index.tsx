export interface LoginStatus {
  result: string
  error?: string
}

export interface HistoryStockDetails {
  asset: string
  finishDate: string
  finishQuote: string
  profit: string
  startDate: string
  startQuote: string
}

export interface QuoteStockAssets {
  asset: string
  startDate: string
  quote: string
}
