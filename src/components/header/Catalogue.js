import React, { useState, Suspense, lazy } from 'react'
import { useTranslation } from 'react-i18next'

const Nav = lazy(() => import('./Nav'))

export default function Catalogue() {
  const [ isNavVisible, setIsNavVisible ] = useState(false)
  const [ t, i18n ] = useTranslation()

  function showNav() {    
    if (!isNavVisible) {
      setIsNavVisible(true)
      document.addEventListener('click', hideNav)        
    } else if (isNavVisible) {
      return null
    }
  }

  function hideNav() {
    setIsNavVisible(false)
    document.removeEventListener('click', hideNav)
  }

  return (
    <div className="position-relative mr-3">
      <button type="button" 
              className="btn btn-light bg-transparent text-primary font-weight-bold border" 
              onClick={showNav}>
        {t('Catalogue|1')}
      </button>
      {
        isNavVisible
        ? <Suspense fallback={<>Loading...</>}>
            <Nav showNav={showNav} />
          </Suspense>
        : null
      }
    </div>
  )
}
