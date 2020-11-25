import React, { useEffect, useState } from 'react'
import { ReactComponent as Arrow } from 'assets/img/icons/pagination-arrow.svg'

function Pagination(props: any) {
  const [current, setCurrent] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const { size, pageSize, onChange } = props

  useEffect(() => {
    onChange(current)
  }, [current, onChange])

  useEffect(() => {
    if (!totalPages) {
      setTotalPages(Math.floor(size / pageSize))
    }
  }, [totalPages, size, pageSize])

  const onPageEnter = (e: React.BaseSyntheticEvent) => {
    const value = parseInt(e.target.value, 10)

    if (value && e.target.value.trim() !== '' && !isNaN(value)) {
      if (/[^\d+$]/.test(e.target.value.trim())) {
        setCurrent(current)
      } else if (value < 2) {
        setCurrent(0)
      } else if (value > totalPages) {
        setCurrent(totalPages - 1)
      } else {
        setCurrent(value - 1)
      }
    }
  }

  return (
    <div className="pagination">
      <span className={`${current === 0 ? 'disabled' : ''}`}>
        <Arrow onClick={() => setCurrent(current - 1)} />
      </span>
      <span className="pagination__position">
        <input
          type="text"
          onChange={onPageEnter}
          placeholder={(current + 1).toString()}
          value={current + 1}
        />{' '}
        /<span className="pagination__pages">{totalPages}</span>
      </span>
      <span className={`${current === totalPages - 1 ? 'disabled' : ''}`}>
        <Arrow
          className="pagination__right"
          onClick={() => setCurrent(current + 1)}
        />
      </span>
    </div>
  )
}

export default Pagination
