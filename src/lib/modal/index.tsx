import React from 'react'

function Modal(props: any) {
  return (
    <div className="modal">
      <header className="modal__header">{props.title}</header>
      <div className="modal__body">{props.children}</div>
    </div>
  )
}

export default Modal
