import React from 'react'
import { Link } from 'react-router-dom'

import './home.css'

function Home() {
  const logo = 'https://s3-us-west-2.amazonaws.com/seaspan-theseus-assets/seaspan-logo.png'
  return (
    <div className="home">
      <header className="home-header">
        <img src={logo} className="home-logo" alt="logo" />
        <Link to="/dashboard"> Get Started </Link>
      </header>
    </div>
  )
}

export default Home
