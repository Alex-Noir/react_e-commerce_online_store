import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ContextProvider, SearchContextProvider } from './context';
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <ContextProvider>
    <SearchContextProvider>
      <Router>
        <App />
      </Router>
    </SearchContextProvider>
  </ContextProvider>, 
  document.getElementById('root'));