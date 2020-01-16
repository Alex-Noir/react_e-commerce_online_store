import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import Nav from './Nav'

export default function Catalogue() {
  const [ isNavVisible, setIsNavVisible ] = useState(false)
  const [ t, i18n ] = useTranslation()

  function toggleNav() {
    setIsNavVisible(!isNavVisible)
  }

  return (
    <div className="position-relative mr-3">
      <button type="button" 
              className="btn btn-light bg-transparent text-primary font-weight-bold border" 
              onClick={toggleNav}>
        {t('Catalogue|1')}
      </button>
      {
        isNavVisible
        ? <Nav toggleNav={toggleNav} />
        : null
      }
    </div>
  )
}
