import React from 'react'
import { useTranslation } from 'react-i18next'

export default function LogIn(props) {
  const [ t, i18n ] = useTranslation()

  return (
    <div className="border-left border-bottom border-right p-2">
      <form className="d-flex flex-column" name="LogIn" onSubmit={props.handleLogInSubmit}>
        <label className="d-flex flex-column">
          {t('LogIn|1')}
          <input  className="px-1" 
                  type="email" 
                  name="email" 
                  value={props.email} 
                  onChange={props.handleChange} 
                  required />
        </label>
        <label className="d-flex flex-column">
          {t('LogIn|2')}
          <input  className="px-1" 
                  type="password" 
                  name="password" 
                  value={props.password} 
                  onChange={props.handleChange} 
                  required />
        </label>
        <div className="form-check mb-2">
          <input className="form-check-input" type="checkbox" id="autoSizingCheck" ref={props.checkbox} />
          <label className="form-check-label" for="autoSizingCheck">
            {t('LogIn|3')}
          </label>
        </div> 
        <button type="submit" className="mt-1">{t('AuthButtons|1')}</button>
      </form>
      <div class="dropdown-divider"></div>
      <a className="dropdown-item badge badge-light" href="/#" onClick={props.showResetPassword}> 
        {t('LogIn|4')}
      </a>
    </div>
  )
}
