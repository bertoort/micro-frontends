import React from 'react'
import { Route } from 'react-router-dom'

import Navigation from './navigation'

function NavRoute({ path, component }) {
  return (
    <>
      <Navigation />
      <Route path={path} component={component} />
    </>
  )
}

export default NavRoute
