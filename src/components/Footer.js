import React, { useEffect } from 'react'
import { StyledFooter } from './styles'
import { useTranslation } from 'react-i18next'

import Lists from './container/footer/Lists'
import I18nButtons from './container/footer/I18nButtons'
import Social from './container/footer/Social'

export default function Footer() {
  const [ t, i18n ] = useTranslation()

  useEffect(() => {
    i18n.changeLanguage('en')
  }, [])

  return (
    <StyledFooter className="bg-dark mt-5 py-3">
      <Lists />
      <I18nButtons />
      <Social />
    </StyledFooter>
  )
}
