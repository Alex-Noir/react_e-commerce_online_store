import React from 'react'
import { useTranslation } from 'react-i18next'

export default function AuthButtons({ handleVisibility }) {
  const [ t ] = useTranslation()

  return (
    <>
      <button className="btn btn-link d-flex flex-nowrap p-0 mx-1"
              type="button" 
              name="signIn" 
              onClick={handleVisibility}> {t('AuthButtons|1')} </button>
      <button className="btn btn-link d-flex flex-nowrap p-0 mx-1"
              type="button" 
              name="registration" 
              onClick={handleVisibility}> {t('AuthButtons|2')} </button>
    </>
  )
}
