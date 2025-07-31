import React from 'react'
import logo_light from '../assets/logo-b.png'
import logo_dark from '../assets/logo-w.png'
import search_light from '../assets/search-b.png'
import search_dark from '../assets/search-w.png'
import mode_light from '../assets/night.png'
import mode_dark from '../assets/day.png'
import '../css/navbar.css'

function NavBar({ theme, setTheme }) {
  const toggleMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`navbar ${theme}`}>
      <img
        src={theme === 'light' ? logo_light : logo_dark}
        alt="logo"
        className="logo"
      />

      <div className="search-box">
        <input type="text" placeholder="Search..." />
        <img
          src={theme === 'light' ? search_light : search_dark}
          alt="search-icon"
        />
      </div>

      <div className="mode">
        <img
          onClick={toggleMode}
          src={theme === 'light' ? mode_light : mode_dark}
          alt="mode"
          className="toggle"
        />
        <h2>Login</h2>
        <h2>Sign Up</h2>
      </div>
    </div>
  )
}

export default NavBar
