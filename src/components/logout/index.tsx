import React from 'react'
import { useHistory } from 'react-router-dom'
import Button from 'lib/button'

function Logout() {
  const history = useHistory()

  const onClick = () => {
    localStorage.removeItem('auth')
    history.push('/login')
  }

  return (
    <Button onClick={onClick} className="button__default">
      Выход
    </Button>
  )
}

export default Logout
