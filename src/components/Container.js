import React from 'react';
import Nav from './container/Nav';
import Carousel from './container/Carousel';
import Products from './container/Products';
import MobilePhones from './container/MobilePhones';
import { StyledDivGridContainer, StyledDivGridContent } from './styles';
import { Route } from "react-router-dom";

export default function Container() {
  return (
    <StyledDivGridContainer>
      <StyledDivGridContent className="no-gutters justify-content-between">
        <Route path="/" component={Nav}/>
        <Route exact path="/" component={Carousel}/>
        <Route path="/mobile_phones" component={MobilePhones}/>
        <Route exact path="/" component={Products}/>
      </StyledDivGridContent>
    </StyledDivGridContainer>
  )
}
