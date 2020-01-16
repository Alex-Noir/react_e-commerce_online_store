import React from 'react'
import { useTranslation } from 'react-i18next'

export default function LogIn(props) {
  const [ t, i18n ] = useTranslation()

  return (
    <div className="border-left border-bottom border-right p-2">
      <form className="d-flex flex-column" name="LogIn" onSubmit={(e) => props.handleLogInSubmit(e)}>
        <label className="d-flex flex-column">
          {t('LogIn|1')}:
          <input  type="email"
                  name="email"
                  value={props.email}
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
        <button type='submit' className="mt-1">{t('Header|1')}</button>
      </form>
    </div>
  )
}
