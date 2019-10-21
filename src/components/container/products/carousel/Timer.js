import React, { Component } from 'react'

export default class Timer extends Component {
  constructor() {
    super();
    this.state = ({
      currentTime: new Date(),
      endTime: new Date(2019, 9, 19, 16, 5)
    })

    this.timer = this.timer.bind(this);
  }

  componentDidMount() {
    if (this.state.currentTime !== this.state.endTime) {
      return this.countdown = setInterval( () => this.timer(), 1000 );
    } else {
      return clearInterval(this.countdown);
    }
  }
  
  componentWillUnmount() {
    clearInterval(this.countdown);
  }

  timer() {
    this.setState({
      currentTime: new Date()
    })
  }

  render() {
    if (Math.sign(this.state.endTime - this.state.currentTime) === -1) { 
      clearInterval(this.countdown)
    }
    return (
      <span>
        { (Math.sign(this.state.endTime - this.state.currentTime) !== -1) ? 
          (
            Math.floor((this.state.endTime - this.state.currentTime) / 1000 / 3600 / 24) + 
            ':' +
            new Date(this.state.endTime - this.state.currentTime).toLocaleTimeString(undefined, {hour12: false, timeZone: 'UTC'} )
          ) : (
            '0:00:00:00'
          )

        }
      </span>
    )
  }
}