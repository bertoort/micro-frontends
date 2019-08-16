import React from 'react'
import { Link, withRouter } from 'react-router-dom'

import './navigation.css'

function Navigation({ location }) {
  const activeRoute = location.pathname
  return (
    <nav>
      <Link to="/" className={activeRoute === '/' ? 'active' : ''}>
        Home
      </Link>
      <Link to="/dashboard" className={activeRoute === '/dashboard' ? 'active' : ''}>
        Dashboard
      </Link>
      <Link to="/vessels" className={activeRoute === '/vessels' ? 'active' : ''}>
        Vessels
      </Link>
    </nav>
  )
}

export default withRouter(Navigation)
