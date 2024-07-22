import './index.css'

// import React from 'react' // not in his code
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // helps you to route easily wrapping it with browserRout
  <BrowserRouter> 
    <App />
  </BrowserRouter>,
)
