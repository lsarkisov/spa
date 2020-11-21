import React, { useState } from 'react'
import { ReactComponent as Angle } from 'assets/img/icons/angle.svg'
import { type } from 'os'

type t = {
  options: string[]
  onClick: (param: number) => void
}

function Select(props: t) {
  const [active, setActive] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const { options, onClick } = props

  const callback = (index: number) => {
    setActive(index)
    onClick(index)
    setIsOpen(false)
  }

  return (
    <div className="select">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`select__selected ${isOpen ? 'select__active' : ''}`}
      >
        {options[active]} <Angle />
      </div>
      {isOpen && (
        <ul>
          {options.map((option, index) => (
            <li onClick={() => callback(index)} key={option}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Select
