import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render( // react creates its own dom
  <StrictMode>
    <App />
  </StrictMode>,  // for testing during dev
)
