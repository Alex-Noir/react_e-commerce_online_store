import React from 'react'
import { useTranslation } from 'react-i18next'

export default function LogIn({ email, password, showResetPassword, handleChange, handleLogInSubmit, checkbox }) {
  const [ t ] = useTranslation()

  return (
    <div className="border-left border-bottom border-right p-2">
      <form className="d-flex flex-column" name="LogIn" onSubmit={handleLogInSubmit}>
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
          {t('LogIn|2')}
          <input  className="px-1" 
                  type="password" 
                  name="password" 
                  value={password} 
                  onChange={handleChange} 
                  required />
        </label>
        <div className="form-check mb-2">
          <input className="form-check-input" type="checkbox" id="autoSizingCheck" ref={checkbox} />
          <label className="form-check-label" for="autoSizingCheck">
            {t('LogIn|3')}
          </label>
        </div> 
        <button type="submit" className="mt-1">{t('AuthButtons|1')}</button>
      </form>
      <div className="dropdown-divider"></div>
      <a className="dropdown-item badge badge-light" href="/#" onClick={showResetPassword}> 
        {t('LogIn|4')}
      </a>
    </div>
  )
}
