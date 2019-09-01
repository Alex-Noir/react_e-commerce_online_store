import React from 'react';
import './Container.css';
import Nav from './nav/Nav';
import Carousel from './carousel/Carousel';

export default function Container() {
  return (
    <div className="content d-flex">
      <Nav />
      <Carousel />
    </div>
  )
}
