import React from 'react';
import { Route } from "react-router-dom";
import { StyledDivWrapper } from './components/styles';

import Header from './components/Header';
import Container from './components/Container';
import Footer from './components/Footer';

export default function App() {
  return (
    <StyledDivWrapper className="d-flex flex-column">
      <Route path="/" component={Header}/>
      <Route path="/" component={Container}/>
      <Route path="/" component={Footer}/>
    </StyledDivWrapper>
  );
}
