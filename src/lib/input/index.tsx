import React from 'react'

type input = {
  label?: string
  type: string
  placeholder?: string
  value?: string
  error?: boolean
  onChange: (e: string) => void
}

function Input(props: input) {
  const { label, type, placeholder, value, error, onChange } = props

  return (
    <div className={`input ${error ? 'error' : ''}`}>
      {label && <label>{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}

export default Input
