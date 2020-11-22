import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

export default function NoMatch(props: any) {
  const [authenticated, setAuthenticated] = useState(
    !!localStorage.getItem('auth'),
  )
  const { status } = useSelector((state: any) => state.login)
  let location = useLocation()

  useEffect(() => {
    if (status) {
      setAuthenticated(status.result === 'ok')
    }
  }, [status])

  return (
    <div className="no-match">
      <h2>
        {authenticated ? (
          <Link to="/stock">Stock page</Link>
        ) : (
          <Link to="/login">Login page</Link>
        )}
      </h2>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  )
}
