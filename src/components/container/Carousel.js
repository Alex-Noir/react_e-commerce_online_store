import React from 'react';
import { StyledDivCarousel } from '../styles';
import { Link } from "react-router-dom";

export default function Carousel() {
  return (
    <StyledDivCarousel id="carouselIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselIndicators" data-slide-to="1"></li>
        <li data-target="#carouselIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Link to='/mobile_phones_discount'>
            <img className="d-block" src={require('../../img/carousel/01.webp')} alt="First slide"/>
          </Link>
        </div>
        <div className="carousel-item">
          <Link to='/laptops_discount'>
            <img className="d-block" src={require('../../img/carousel/02.webp')} alt="Second slide"/>
          </Link>
        </div>
        <div className="carousel-item">
          <Link to='/tablets_discount'>
            <img className="d-block" src={require('../../img/carousel/03.webp')} alt="Third slide"/>
          </Link>
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </StyledDivCarousel>
  )
}
