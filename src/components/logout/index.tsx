import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { logoutAction } from 'actions/login'
import Button from 'lib/button'

function Logout() {
  const history = useHistory()
  const dispatch = useDispatch()

  const onClick = () => {
    localStorage.removeItem('auth')
    dispatch(logoutAction())
    history.push('/login')
  }

  return (
    <Button onClick={onClick} className="button__default">
      Выход
    </Button>
  )
}

export default Logout
