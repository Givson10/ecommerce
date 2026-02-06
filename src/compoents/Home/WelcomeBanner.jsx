import React from 'react'
import './WelcomeBanner.css'

function WelcomeBanner({ user = "Explorer" }) {
  return (
    <div className="welcome-banner">
      <div className="decorative-bg" />
      
      <div className="banner-content">
        
        <p className="banner-subtitle">
        Pablo Emilio Escobar Gaviria
        </p>
        
        <h1 className="banner-title">
          Welcome, <span className="user-name">
            {user}
          </span>
        </h1>
        
        <div className="banner-divider" />
      </div>
    </div>
  )
}

export default WelcomeBanner