import React from 'react'
import { IStar } from '../../../Styles'

export default function Rating({ customRating, handleMouseover, rate, handleMouseout }) {
  let stars = []

  for (let i = 0; i < 10; i++) {
    let classNameValue = "far fa-star text-dark h4"
    if (customRating >= i && customRating !== null) {
      classNameValue = "fas fa-star text-warning h4"
    }
    stars.push(
      <IStar
        key={i.toString()}
        style={{ direction: (i % 2 === 0) ? "ltr" : "rtl" }}
        className={classNameValue}
        onMouseOver={() => handleMouseover(i)}
        onClick={() => rate(i)}
        onMouseOut={handleMouseout}
      />
    )
  }

  return (
    <>
      <div className="d-flex">{stars}</div>
    </>
  )
}
