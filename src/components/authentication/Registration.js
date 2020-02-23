import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Registration({email, name, password, passwordConfirm, handleChange, handleRegistrationSubmit}) {
  const [ t ] = useTranslation()

  return (
    <div className="border-left border-bottom border-right p-2">
      <form className="d-flex flex-column" name="Registration" onSubmit={handleRegistrationSubmit} >
        <label className="d-flex flex-column">
          {t('LogIn|1')}
          <input  className="px-1" 
                  type="email" 
                  name="email" 
                  value={email} 
                  onChange={handleChange} 
                  required />
        </label>
        <label className="d-flex flex-column">
          {t('Registration|1')}
          <input  className="px-1" 
                  type="text" 
                  name="name"
                  value={name} 
                  onChange={handleChange} 
                  required />
        </label>
        <label className="d-flex flex-column">
          {t('LogIn|2')}
          <input className="px-1" 
                 type="password" 
                 name="password" 
                 value={password} 
                 onChange={handleChange} 
                 required />
        </label>
        <label className="d-flex flex-column">
          {t('Registration|2')}
          <input  className="px-1" 
                  type="password" 
                  name="passwordConfirm"
                  passwordConfirm={passwordConfirm} 
                  onChange={handleChange} 
                  required />
        </label>
        <button type="submit" className="mt-1">{t('AuthButtons|2')}</button>
      </form>
    </div>
  )
}
