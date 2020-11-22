import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { historyAction } from 'actions/stock'
import { Pagination } from 'lib'

function History() {
  const [page, setPage] = useState(0)
  const { history } = useSelector((state: any) => state.stock)
  const dispatch = useDispatch()
  const pageSize = 6

  useEffect(() => {
    if (!history) {
      dispatch(historyAction({ action: 'history' }))
    }
  }, [history])

  console.log('page:::', page)

  return (
    <div className="stock__history">
      <div className="table">
        {history &&
          history.result === 'ok' &&
          history.deals.splice(page, pageSize).map((h: any) => (
            <ul className="row" key={`${h.asset}-${h.startDate}`}>
              <li>{h.asset}</li>
              <li>{h.startDate}</li>
              <li>{h.finishDate}</li>
              <li>{h.startQuote}</li>
              <li>{h.finishQuote}</li>
              <li>{h.profit}</li>
            </ul>
          ))}
      </div>
      {history && history.result === 'ok' && (
        <Pagination
          pageSize={pageSize}
          // onChange={setPage}
          page={page}
          size={history.deals.length}
        />
      )}
    </div>
  )
}

export default History
