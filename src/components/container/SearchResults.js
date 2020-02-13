import React, { useEffect } from 'react'
import { ContextConsumer } from '../../context'
import { DivSearchResults } from '../styles'

import SearchResult from './SearchResult'

export default function SearchResults(props) {
  useEffect(() => {
    window.scrollTo(0, 0)
    
    return () => {
      props.value.makeResultsInvisible()
      props.value.nullifySearchValue()
    }
  }, [])

  return (
    <DivSearchResults className="d-flex flex-column">
      <ContextConsumer>
        {
          value => {
            return value.results.map(result => {
              return <SearchResult key={result.id} result={result} value={value} />
            })
          }
        }
      </ContextConsumer>
    </DivSearchResults>
  )
}
