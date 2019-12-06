import React, { Component } from 'react'
import { FormSearchBar } from '../styles'
import { ContextConsumer } from '../../context'

export default class Search extends Component {
  render() {
    return (
      <ContextConsumer>
        {
          value => (
            <FormSearchBar onSubmit={value.handleSearch}>
              <input type="search" name="search" className="border border-dark rounded"/>
              <button type="submit" value="submit" className="bg-warning border-0 text-danger rounded-right position-relative">
                <i className="fas fa-search"></i>
              </button>
            </FormSearchBar>
        )}
      </ContextConsumer>
    )
  }
}
