import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

export default function Social() {
  const [ t, i18n ] = useTranslation()  
  const submitButtonRef = useRef(null)
  useEffect(() => {
    submitButtonRef.current.value = t('ContactUs|3')
  }, [t])

  return (
    <div className="d-flex flex-column justify-content-between text-light">
      <form>
        {t('Social|1')}
        <label htmlFor="email" className="d-flex no-wrap">
          <input type="email" size="20" id="email" />
          <input type="submit" value={t('ContactUs|3')} ref={submitButtonRef}></input>
        </label>
      </form>
      <div>
        <div>{t('Social|2')}</div>
        <a href="/#" className="text-light mr-2"><i className="fab fa-facebook-square fa-2x"></i></a>
        <a href="/#" className="text-light mr-2"><i className="fab fa-twitter-square fa-2x"></i></a>
        <a href="/#" className="text-light mr-2"><i className="fab fa-instagram fa-2x"></i></a>
        <a href="/#" className="text-light mr-2"><i className="fab fa-youtube fa-2x"></i></a>
        <a href="/#" className="text-light mr-2"><i className="fab fa-linkedin fa-2x"></i></a>
      </div>
      <div>&#169; 1991 - {new Date().getFullYear()} {t('Social|3')}</div>
    </div>
  )
}
