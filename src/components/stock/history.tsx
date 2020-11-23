import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { historyAction } from 'actions/stock'
import { Pagination } from 'lib'
import { StockDetails } from 'types'
import { formatDate } from 'utils'

function History() {
  const [page, setPage] = useState(0)
  const { history } = useSelector((state: any) => state.stock)
  const dispatch = useDispatch()
  const pageSize = 5

  useEffect(() => {
    if (!history) {
      dispatch(historyAction({ action: 'history' }))
    }
  }, [history, dispatch])

  const rangeOfHistory = (index: number): boolean => {
    if (page === 0) {
      return index < pageSize
    }
    if (page === 1) {
      return index >= pageSize && index < pageSize * 2
    }
    return index >= page * pageSize && index < page * pageSize + pageSize
  }

  return (
    <div className="stock__history">
      <div className="table">
        {history &&
          history.result === 'ok' &&
          history.deals
            .filter((item: any, index: number) => rangeOfHistory(index))
            .map((details: StockDetails) => (
              <ul className="row" key={`${details.asset}-${details.startDate}`}>
                <li>{details.asset}</li>
                <li>{formatDate(details.startDate)}</li>
                <li>{details.startQuote}</li>
                <li>{formatDate(details.finishDate)}</li>
                <li>{details.finishQuote}</li>
                <li>{details.profit}</li>
              </ul>
            ))}
      </div>
      {history && history.result === 'ok' && (
        <Pagination
          pageSize={pageSize}
          onChange={setPage}
          page={page}
          size={history.deals.length}
        />
      )}
    </div>
  )
}

export default History
