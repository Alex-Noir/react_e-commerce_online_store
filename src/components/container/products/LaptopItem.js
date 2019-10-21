import React from 'react';
import { StyledProductItem } from '../../styles';

export default function LaptopItem(props) {
  return (
    <StyledProductItem className="d-flex flex-column mr-2 mt-2 p-3 rounded bg-light border border-dark">
      <h4>{props.laptop.title}</h4>
      <img 
        className="align-self-center"
        alt="Item"
        width={props.laptop.imageWidth}
        heigth={props.laptop.imageHeight}
        src={require(`../../../img/products/laptops/${props.laptop.imageSrc}`)}
      />
      <div>{props.laptop.price}</div>
    </StyledProductItem>
  )
}