import React from 'react'
import { IStar } from '../../../styles'

export default class Rating extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      rating: this.props.rating || null,
      temp_rating: null
    }
  }

  handleMouseover(rating) {
    this.setState(prev => ({
      rating,
      temp_rating: prev.rating
    }))
  }

  handleMouseout() {
    this.setState(prev => ({
      rating: prev.temp_rating
    }))
  }

  rate(rating) {
    this.setState({
      rating,
      temp_rating: rating
    })
  }

  render() {
    const { rating } = this.state

    let stars = []

    for (let i = 0; i < 10; i++) {
      let classNameValue = "far fa-star text-dark h4"
      if (rating >= i && rating !== null) {
        classNameValue = "fas fa-star text-warning h4"
      }
      stars.push(
        <IStar
          style={{ direction: (i % 2 === 0) ? "ltr" : "rtl" }}
          className={classNameValue}
          onMouseOver={() => this.handleMouseover(i)}
          onClick={() => this.rate(i)}
          onMouseOut={() => this.handleMouseout()}
        />
      );
    }

    return (
      <div className="d-flex flex-column">
        <div className="d-flex flex-row">{stars}</div>
        <h5>Global rating: { this.props.rating }</h5>
        <h5>Your rating: { ((this.state.rating + 1) / 2).toFixed(1) }</h5>
      </div>
    );
  }
}
