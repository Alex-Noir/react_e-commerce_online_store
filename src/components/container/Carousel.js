import React, { useEffect } from 'react'
import { DivCarousel } from '../Styles'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

export default function Carousel() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const settings = {
    dots: true,
    infinite: true, 
    speed: 1000, 
    slidesToShow: 1, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    adaptiveHeight: true,
    arrows: false
  }

  return (
    <DivCarousel>
      <Slider {...settings}>
        <>
          <Link to="/mobile-phones-discount">
            <img src={require('../../img/carousel/01.webp')} alt="First slide" />
          </Link>
        </>
        <>
          <Link to="/laptops-discount">
            <img src={require('../../img/carousel/02.webp')} alt="Second slide" />
          </Link>
        </>
        <>
          <Link to="/tablets-discount">
            <img src={require('../../img/carousel/03.webp')} alt="Third slide" />
          </Link>
        </>
      </Slider>
    </DivCarousel>
  )
}
