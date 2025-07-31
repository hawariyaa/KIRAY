import React from 'react'
import NavBar from '../components/NavBar.jsx'
import { useState } from 'react'

function Home() {
 const[theme, setTheme] = useState('light');
  return (
  <>
    <div className="container">
        <NavBar theme={theme} setTheme={setTheme} />
    </div>
  </>
  )
}

export default Home