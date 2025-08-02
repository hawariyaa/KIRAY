import { useState } from 'react'
import './css/App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
   <main className="main-content">
     <Routes>
       <Route path="/" element={<Home />}/>
       
     </Routes>
   </main>
  )
}

export default App
