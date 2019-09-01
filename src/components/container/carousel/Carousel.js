import React from 'react';
import './Carousel.css';

export default function Carousel() {
  return (
    <div id="carouselIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselIndicators" data-slide-to="1"></li>
        <li data-target="#carouselIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block" src={require('../../../img/carousel/lake.jpg')} alt="First slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block" src={require('../../../img/carousel/landscape.jpg')} alt="Second slide"/>
        </div>
        <div className="carousel-item">
          <img className="d-block" src={require('../../../img/carousel/sunset.jpg')} alt="Third slide"/>
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
    </div>
  )
}
