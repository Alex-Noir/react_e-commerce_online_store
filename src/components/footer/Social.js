import React, { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

export default function Social() {
  const [ t, i18n ] = useTranslation()  
  const submitButtonRef = useRef(null)
  useEffect(() => {
    submitButtonRef.current.value = t('ContactUs|3')
  }, [t])

  return (
    <div className="d-flex flex-column">
      <form className="float-left text-light">
        {t('Social|1')}
        <label htmlFor="email" className="d-flex flex-row no-wrap">
          <input type="email" size="27" id="email" />
          <input type="submit" value={t('ContactUs|3')} ref={submitButtonRef}></input>
        </label>
      </form>
      <div className="text-light">
        <div>{t('Social|2')}</div>
        <a href="/#" className="text-light mr-2"><i className="fab fa-facebook-square fa-2x"></i></a>
        <a href="/#" className="text-light mr-2"><i className="fab fa-twitter-square fa-2x"></i></a>
        <a href="/#" className="text-light mr-2"><i className="fab fa-instagram fa-2x"></i></a>
        <a href="/#" className="text-light mr-2"><i className="fab fa-youtube fa-2x"></i></a>
        <a href="/#" className="text-light mr-2"><i className="fab fa-linkedin fa-2x"></i></a>
        <div className="mt-5">&#169; 1991 - {new Date().getFullYear()} {t('Social|3')}</div>
      </div>
    </div>
  )
}
