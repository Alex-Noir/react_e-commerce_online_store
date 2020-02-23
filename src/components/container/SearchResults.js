import React, { useEffect, useContext } from 'react'
import { Context } from '../../context'
import { DivSearchResults } from '../Styles'

import SearchResult from './SearchResult'

export default function SearchResults() {
  const { results, makeResultsInvisible, nullifySearchValue } = useContext(Context)

  useEffect(() => {
    window.scrollTo(0, 0)
    
    return () => {
      makeResultsInvisible()
      nullifySearchValue()
    }
  }, [])

  return (
    <DivSearchResults className="d-flex flex-column">
      {
        results.map(result => {
          return <SearchResult key={result.id} result={result} />
        })
      }
    </DivSearchResults>
  )
}
