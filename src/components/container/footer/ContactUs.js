import React from 'react'
import { DivContactForm } from '../../styles'
import { useTranslation } from 'react-i18next'

export default function ContactUs() {
  const [ t, i18n ] = useTranslation()

  return (
    <DivContactForm className="d-flex flex-column bg-light rounded p-5">
      <h1>{t('Footer|2')}!</h1>
      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1">{t('ContactUs|1')}</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" required />
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">{t('ContactUs|2')}</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
        </div>
        <input className="btn btn-primary" type="submit" value={t('ContactUs|3')}></input>
      </form>
    </DivContactForm>
  )
}
