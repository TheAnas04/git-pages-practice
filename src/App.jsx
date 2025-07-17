import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <div className="card">
          <h1 className="title">Welcome to Serenity</h1>
          <p className="subtitle">
            A minimal and peaceful starting point for your next project.
          </p>
          <button className="button">Get Started</button>
        </div>
      </div>
    </>
  )
}

export default App
