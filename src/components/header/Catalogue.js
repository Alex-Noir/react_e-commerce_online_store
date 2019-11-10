import React, { Component } from 'react'

import Nav from '../container/Nav'

export default class Catalogue extends Component {
  constructor() {
    super()
    this.state = {
      isNavVisible: false
    }

    this.toggleNav = this.toggleNav.bind(this)
  }

  toggleNav() {
    !this.state.isNavVisible
    ? (
        this.setState({
          isNavVisible: true
        })
      )
    : (
        this.setState({
          isNavVisible: false
        })
      )
  }

  render() {
    return (
      <div>
        <button type="button" className="mr-3 btn btn-light bg-transparent text-primary font-weight-bold border" onClick={this.toggleNav}>
          Catalogs
        </button>
        {
          this.state.isNavVisible
          ? ( <Nav toggleNav={this.toggleNav}/> )
          : ( null )
        }
      </div>
    )
  }
}
