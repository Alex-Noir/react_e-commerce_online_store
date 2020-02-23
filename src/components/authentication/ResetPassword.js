import React from 'react'
import { useTranslation } from 'react-i18next'

export default function ResetPassword({ hideResetPassword }) {
  const [ t ] = useTranslation()

  return (
    <div className="border-left border-bottom border-right p-2">
      <button className="ml-2 mb-3 btn btn-light" onClick={hideResetPassword}>
        <i className="fas fa-arrow-left"></i> {t('ResetPassword|1')}
      </button>
      <form className="d-flex flex-column">        
        <label className="d-flex flex-column">
            {t('ResetPassword|2')}
          <input className="px-1 mt-2" type="email" required />
        </label>
        <button type="submit" className="mt-1"> {t('ResetPassword|3')} </button>
      </form>
    </div>
  )
}
