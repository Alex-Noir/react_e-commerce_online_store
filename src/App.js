import React from 'react';
import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';
import { StyledDivWrapper } from './components/styles';
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <StyledDivWrapper className="d-flex flex-column">
        <Route path="/" component={Header}/>
        <Route path="/" component={Container}/>
        <Route path="/" component={Footer}/>
      </StyledDivWrapper>
    </Router>
  );
}
