import React from 'react';
import { StyledProductItem } from '../../styles';

export default function TabletItem(props) {
  return (
    <StyledProductItem className="d-flex flex-column mr-2 mt-2 p-3 rounded bg-light border border-dark">
      <h4>{props.tablet.title}</h4>
      <img 
        className="align-self-center"
        alt="Item"
        width={props.tablet.imageWidth}
        heigth={props.tablet.imageHeight}
        src={require(`../../../img/products/tablets/${props.tablet.imageSrc}`)}
      />
      <div>{props.tablet.price}</div>
    </StyledProductItem>
  )
}