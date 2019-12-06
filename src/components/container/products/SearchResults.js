import React from 'react'
import { ContextConsumer } from '../../../context'

import SearchResult from './SearchResult'

export default function SearchResults() {
  return (
    <ContextConsumer>
      {
        value => {
          return value.results.map(result => {
            return <SearchResult key={result.id} result = {result}/>
          })
        }
      }
    </ContextConsumer>
  )
}
