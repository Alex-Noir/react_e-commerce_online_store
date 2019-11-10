import React from 'react'
import { SearchContextConsumer } from '../../../context'

import SearchResult from './SearchResult'

export default function SearchResults() {
  return (
    <SearchContextConsumer>
      {
        value => {
          return value.results.map(result => {
            return <SearchResult key={result.id} result = {result}/>
          })
        }
      }
    </SearchContextConsumer>
  )
}
