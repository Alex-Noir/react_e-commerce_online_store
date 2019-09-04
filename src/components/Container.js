import React from 'react';
import Nav from './container/Nav';
import Carousel from './container/Carousel';
import Goods from './container/Goods';
import {StyledSpanBestOffers} from './Styles.js';

export default function Container() {
  return (
    <div className="container p-0">
      <div className="row no-gutters flex-nowrap justify-content-between">
        <Nav />
        <Carousel />
      </div>
      <StyledSpanBestOffers className="h4 mt-3"><b>Best offers</b></StyledSpanBestOffers>
      <Goods />
    </div>
  )
}

