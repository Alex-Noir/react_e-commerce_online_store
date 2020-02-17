import React from 'react'
import { useHistory } from 'react-router-dom'
import { FormSearchBar } from '../Styles'
import { ContextConsumer } from '../../context'

export default function Search() {
  const history = useHistory()
  
  function redirectToSearchResults() {
    history.push('/')
  }

  return (
    <ContextConsumer>
      {
        value => (
          <FormSearchBar  className="d-flex no-wrap my-3 mx-3" 
                          id="formSearchBar" 
                          onSubmit={e => {value.handleSearch(e)
                                          redirectToSearchResults()}}>
            <input  type="search" 
                    name="search" 
                    value={value.searchValue}
                    className="border border-dark border-right-0 rounded-left"
                    onChange={value.setSearchValue} />
            <button type="submit" 
                    value="submit"
                    form="formSearchBar"
                    className="bg-warning border border-warning text-danger rounded-right">
              <i className="fas fa-search"></i>
            </button>
          </FormSearchBar>
        )
      }
    </ContextConsumer>
  )
}
