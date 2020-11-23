import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quoteAction } from 'actions/stock'
import { QuoteStockAssets } from 'types'
import { formatDate } from 'utils'
import { ReactComponent as Star } from 'assets/img/icons/star.svg'
import { ReactComponent as StarActive } from 'assets/img/icons/star-active.svg'

function Quote() {
  const { quote } = useSelector((state: any) => state.stockQuote)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!quote) {
      dispatch(quoteAction({ action: 'quote' }))
    }
  }, [quote, dispatch])

  return (
    <div className="stock__quote">
      <div className="table">
        {quote &&
          quote.result === 'ok' &&
          quote.assets.map((q: QuoteStockAssets, index: number) => (
            <ul className="row" key={q.asset}>
              <li>{index === 0 ? <StarActive /> : <Star />}</li>
              <li>{q.asset}</li>
              <li>{formatDate(q.startDate)}</li>
              <li>{q.quote}</li>
            </ul>
          ))}
      </div>
    </div>
  )
}

export default Quote
