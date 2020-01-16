import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Registration(props) {
  const [ t, i18n ] = useTranslation()

  return (
    <div className="border-left border-bottom border-right p-2">
      <form className="d-flex flex-column" name="Registration" onSubmit={(e) => props.handleRegistrationSubmit(e)}>
        <label className="d-flex flex-column">
          {t('LogIn|1')}:
          <input  type="email"
                  name="email"
                  value={props.email} 
                  onChange={(e) => props.handleChange(e)} 
                  required />
        </label>
        <label className="d-flex flex-column">
          {t('Registration|1')}:
          <input  type="text"
                  name="name" 
                  value={props.name} 
                  onChange={(e) => props.handleChange(e)} 
                  required />
        </label>
        <label className="d-flex flex-column">
          {t('LogIn|2')}:
          <input  type="password" 
                  name="password" 
                  value={props.password} 
                  onChange={(e) => props.handleChange(e)} 
                  required />
        </label>
        <label className="d-flex flex-column">
          {t('Registration|2')}:
          <input  type="password" 
                  name="passwordConfirm" 
                  value={props.passwordConfirm} 
                  onChange={(e) => props.handleChange(e)} 
                  required />
        </label>
        <button type='submit' className="mt-1">{t('Header|2')}</button>
      </form>
    </div>
  )
}
