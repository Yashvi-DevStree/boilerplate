import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <header className="header">
        <div className="logo">⚡ Boilerplate</div>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <main className="hero">
        <div className="badge">React + Vite Boilerplate</div>
        <h1>Build something <span className="highlight">amazing</span></h1>
        <p>A clean, minimal starting point for your next React project.</p>

        <div className="card">
          <button onClick={() => setCount(count + 1)}>
            Count is {count}
          </button>
          <p>Edit <code>src/App.jsx</code> and save to see changes</p>
        </div>

        <div className="features">
          <div className="feature">
            <span className="icon">⚡</span>
            <h3>Vite</h3>
            <p>Lightning fast HMR and build times</p>
          </div>
          <div className="feature">
            <span className="icon">⚛️</span>
            <h3>React 18</h3>
            <p>Latest React with concurrent features</p>
          </div>
          <div className="feature">
            <span className="icon">🚀</span>
            <h3>Production Ready</h3>
            <p>Optimized build output for deployment</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <p>Built with React + Vite 🚀</p>
      </footer>
    </div>
  )
}

export default App