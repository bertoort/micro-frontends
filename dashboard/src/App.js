import React from 'react'
import Home from './components/Home/home'
import { Switch, Route, withRouter } from 'react-router-dom'
import NavRoute from './components/Navigation/nav-route'
import Dashboard from './components/Dashboard/dashboard'

function App({ history }) {
  React.useEffect(() => {
    history.listen(currentLocation => {
      const event = new CustomEvent('vue-route', {
        detail: {
          pathname: currentLocation.pathname,
          search: currentLocation.search
        }
      })
      window.dispatchEvent(event)
    })
    const routeHandler = event => {
      history.push({ ...event.detail })
    }
    window.addEventListener('react-route', routeHandler, true)
    return () => {
      window.removeEventListener('react-route', routeHandler, true)
    }
  }, [history])
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <NavRoute path="/dashboard" exact component={Dashboard} />
      <NavRoute path="/vessels" exact component={null} />
    </Switch>
  )
}

export default withRouter(App)
