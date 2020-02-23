import React from 'react'
import { useTranslation } from 'react-i18next'

export default function ToggleButtons({ toggleTabs, isReviewsTabVisible }) {
  const [ t ] = useTranslation()

  return (
    <div>
      <button type="button" 
              name="reviews" 
              className={`btn ${isReviewsTabVisible ? "btn-light" : "btn-white"} w-50 mt-5 border-right border-top rounded-0 px-4 shadow-none`} 
              onClick={toggleTabs}
              >{t('ToggleButtons|1')}</button>
      <button type="button"
              name="comments"
              className={`btn ${isReviewsTabVisible ? "btn-white" : "btn-light"} w-50 mt-5 border-left border-top rounded-0 px-4 shadow-none`} 
              onClick={toggleTabs}
              >{t('ToggleButtons|2')}</button>
    </div>
  )
}
