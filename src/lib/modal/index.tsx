import React from 'react'

interface ModalType {
  title: string
  children: React.ReactNode
}

function Modal(props: ModalType) {
  return (
    <div className="modal">
      <header className="modal__header">{props.title}</header>
      <div className="modal__body">{props.children}</div>
    </div>
  )
}

export default Modal
