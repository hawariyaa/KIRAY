import React, { useState } from 'react'
import logo_light from '../assets/logo-b.png'
import logo_dark from '../assets/logo-w.png'
import search_light from '../assets/search-b.png'
import search_dark from '../assets/search-w.png'
import mode_light from '../assets/night.png'
import mode_dark from '../assets/day.png'
import '../css/navbar.css'
import menuicon_b from '../assets/menuicon-b.png'
import menuicon_w from '../assets/menuicon-w.png'
import close_icon from '../assets/closeicon.png' // or use two versions if needed


function NavBar({ theme, setTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
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

      {/* Hamburger menu icon for mobile */}
     <img
  src={
    theme === 'light'
      ? menuOpen
        ? close_icon /* dark close icon for light theme */
        : menuicon_b /* black hamburger for light theme */
      : menuOpen
      ? close_icon /* light close icon for dark theme (or use a white version if you have it) */
      : menuicon_w /* white hamburger for dark theme */
  }
  className="menu-icon"
  alt="menu"
  onClick={toggleMenu}
/>


      {/* Normal nav links */}
      <div className={`mode ${menuOpen ? 'open' : ''}`}>
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
