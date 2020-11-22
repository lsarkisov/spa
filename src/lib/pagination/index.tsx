import React, { useEffect, useState } from 'react'
import { ReactComponent as Arrow } from 'assets/img/icons/pagination-arrow.svg'

function Pagination(props: any) {
  const [current, setCurrent] = useState()
  const [totalPages, setTotalPages] = useState(0)

  useEffect(() => {
    if (!totalPages) {
      setTotalPages(Math.ceil(size / pageSize))
    }
  }, [totalPages])

  const onChange = (e: any) => {
    console.log('DATA', e.target.value)
    setCurrent(e.target.value)
  }

  const { size, pageSize } = props
  return (
    <div className="pagination">
      <Arrow />
      <span className="pagination__position">
        <input
          type="text"
          placeholder="1"
          value={current}
          onChange={onChange}
        />{' '}
        /<span className="pagination__pages">{totalPages}</span>
      </span>
      <Arrow className="pagination__right" />
    </div>
  )
}

export default Pagination
