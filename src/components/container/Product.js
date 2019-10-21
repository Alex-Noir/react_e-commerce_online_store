import React from 'react';
import { StyledProductItem } from '../styles';

export default function Product(props) {
  return (
    <StyledProductItem className="d-flex flex-column mr-2 mt-2 p-3 rounded bg-light border border-dark">
      <h4>{props.bestOffer.title}</h4>
      <img 
        className="align-self-center"
        alt="Item"
        width={props.bestOffer.imageWidth}
        heigth={props.bestOffer.imageHeight}
        src={require(`../../img/products/mobile_phones/${props.bestOffer.imageSrc}`)}
      />
      <div>{props.bestOffer.price}</div>
    </StyledProductItem>
  )
}