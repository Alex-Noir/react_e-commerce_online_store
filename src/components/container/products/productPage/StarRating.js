import React from 'react'
import { IStar } from '../../../styles'

export default class Rating extends React.PureComponent {

  render() {
    let stars = []

    for (let i = 0; i < 10; i++) {
      let classNameValue = "far fa-star text-dark h4"
      if (this.props.customRating >= i && this.props.customRating !== null) {
        classNameValue = "fas fa-star text-warning h4"
      }
      stars.push(
        <IStar
          style={{ direction: (i % 2 === 0) ? "ltr" : "rtl" }}
          className={classNameValue}
          onMouseOver={() => this.props.handleMouseover(i)}
          onClick={() => this.props.rate(i)}
          onMouseOut={() => this.props.handleMouseout()}
        />
      )
    }

    return (
      <div className="d-flex flex-column">
        <div className="d-flex flex-row">{stars}</div>
      </div>
    )
  }
}
