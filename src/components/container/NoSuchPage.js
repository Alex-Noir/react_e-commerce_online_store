import React from 'react'
import { Div404 } from '../Styles'
import { useTranslation } from 'react-i18next'

export default function NoSuchPage() {
  const [ t ] = useTranslation()

  return (
    <Div404 className="d-flex flex-column align-items-center">
      <h1>404</h1>
      <h2>{t('NoSuchPage|1')}</h2>
    </Div404>
  )
}
