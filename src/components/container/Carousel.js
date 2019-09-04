import React from 'react';
import {StyledDivCarousel, StyledDivCarouselInner, StyledDivCarouselItem} from '../Styles';

export default function Carousel() {
  return (
    <StyledDivCarousel id="carouselIndicators" className="carousel slide col-auto" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselIndicators" data-slide-to="1"></li>
        <li data-target="#carouselIndicators" data-slide-to="2"></li>
      </ol>
      <StyledDivCarouselInner className="carousel-inner">
        <StyledDivCarouselItem className="carousel-item active">
          <img className="d-block" src={require('../../img/carousel/lake.jpg')} alt="First slide"/>
        </StyledDivCarouselItem>
        <StyledDivCarouselItem className="carousel-item">
          <img className="d-block" src={require('../../img/carousel/landscape.jpg')} alt="Second slide"/>
        </StyledDivCarouselItem>
        <StyledDivCarouselItem className="carousel-item">
          <img className="d-block" src={require('../../img/carousel/sunset.jpg')} alt="Third slide"/>
        </StyledDivCarouselItem>
      </StyledDivCarouselInner>
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
