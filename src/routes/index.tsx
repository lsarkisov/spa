import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import NoMatch from 'components/no-match'
import Login from 'components/login'
import Stock from 'components/stock'

const PublicRoute = ({ component, ...rest }: any) => {
  const routeComponent = (props: any) => React.createElement(component, props)
  return <Route {...rest} render={routeComponent} />
}

const PrivateRoute = ({ component, isAuthenticated, ...rest }: any) => {
  const routeComponent = (props: any) =>
    isAuthenticated ? (
      React.createElement(component, props)
    ) : (
      <Redirect to={{ pathname: '/login' }} />
    )
  return <Route {...rest} render={routeComponent} />
}

function Routes() {
  const [authenticated, setAuthenticated] = useState(
    !!localStorage.getItem('auth'),
  )
  const { status } = useSelector((state: any) => state.login)

  useEffect(() => {
    if (status) {
      setAuthenticated(status.result === 'ok')
    }
  }, [status])

  return (
    <Router>
      <Switch>
        <PublicRoute component={Login} path="/login" />
        <PrivateRoute
          isAuthenticated={authenticated}
          component={Stock}
          path="/stock"
        />
        <Route exact path="/">
          {authenticated ? <Redirect to="/stock" /> : <Redirect to="/login" />}
        </Route>
        <PublicRoute component={NoMatch} />
      </Switch>
    </Router>
  )
}

export default Routes
