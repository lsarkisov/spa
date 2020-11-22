import React from 'react'

function Button(props: any) {
  return (
    <div className="button" onClick={props.onClick}>
      {props.children}
    </div>
  )
}

export default Button
