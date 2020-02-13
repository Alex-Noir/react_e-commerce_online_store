import React from 'react'
import { IStar } from '../../../styles'

export default function Rating(props) {
  let stars = []

  for (let i = 0; i < 10; i++) {
    let classNameValue = "far fa-star text-dark h4"
    if (props.customRating >= i && props.customRating !== null) {
      classNameValue = "fas fa-star text-warning h4"
    }
    stars.push(
      <IStar
        style={{ direction: (i % 2 === 0) ? "ltr" : "rtl" }}
        className={classNameValue}
        onMouseOver={() => props.handleMouseover(i)}
        onClick={() => props.rate(i)}
        onMouseOut={props.handleMouseout}
      />
    )
  }

  return (
    <>
      <div className="d-flex">{stars}</div>
    </>
  )
}
