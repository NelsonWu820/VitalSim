import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <h1>VitalSim</h1>
        <div>
          <button>Allow Access to FitBit</button>
        </div>
      </header>
    </>
  )
}

export default App
