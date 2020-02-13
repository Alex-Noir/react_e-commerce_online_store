import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './i18n'
import App from './App'
import { ContextProvider } from './context'
import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <Router>
        <Suspense fallback={
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        }>
          <App />
        </Suspense>
      </Router>
    </ContextProvider>
  </React.StrictMode>, 
  document.getElementById('root'))
