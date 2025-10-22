import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// Make sure we're targeting the correct root element
const rootElement = document.getElementById('root')
if (!rootElement) {
  // Create root element if it doesn't exist (for troubleshooting)
  const root = document.createElement('div')
  root.id = 'root'
  document.body.appendChild(root)
  console.warn('Root element was missing, created a new one')
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)