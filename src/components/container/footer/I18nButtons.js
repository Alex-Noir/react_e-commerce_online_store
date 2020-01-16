import React, { useEffect } from 'react'
import { ContextConsumer } from '../../../context'
import { useTranslation } from 'react-i18next'

export default function I18nButtons() {
  const [ t, i18n ] = useTranslation()

  useEffect(() => {
    i18n.changeLanguage('en')
  }, [])

  function changeLanguage(e) {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <div className="d-flex flex-column justify-content-around align-items-center">
      <div className="bg-success p-2 text-light rounded">{t('I18nButtons|1')}:
        <select className="ml-2 bg-success text-light border border-success" 
                onChange={changeLanguage}>
          <option value="en">English</option>
          <option value="de">Deutsche</option>
          <option value="fr">Française</option>
          <option value="es">Español</option>
          <option value="it">Italiano</option>
          <option value="ru">Русский</option>
          <option value="zh">中文</option>
          <option value="ja">日本語</option>
          <option value="ko">한국어</option>
          <option value="hi">हिंदी</option>
        </select>
      </div>
      <ContextConsumer>
        {
          value => (
            <div className="bg-info p-2 text-light rounded">{t('I18nButtons|2')}:
              <select className="ml-2 bg-info text-light border border-info"
                      onChange={e => {value.changeCurrency(e)}}>
                <option value="€">€ (EUR) Euro</option>
                <option value="$">$ (USD) U.S. Dollar</option>
                <option value="₽">₽ (RUB) Russian Ruble</option>
                <option value="Ch¥">¥ (CNY) Chinese Yuan</option>
                <option value="Jp¥">¥ (JPY) Japanese Yen</option>
                <option value="₩">₩ (KRW) Korean Won</option>
                <option value="₹">₹ (INR) Indian Rupee</option>
              </select>
            </div>
          )
        }
      </ContextConsumer>
      <div className="bg-primary p-2 text-light rounded">{t('I18nButtons|3')}:
        <select className="ml-2 bg-primary text-light border border-primary">
          <option value="UK">United Kingdom</option>
          <option value="USA">United States</option>
          <option value="Germany">Germany</option>
          <option value="France">France</option>
          <option value="Spain">Spain</option>
          <option value="Italy">Italy</option>
          <option value="Russia">Russia</option>
          <option value="China">China</option>
          <option value="Japan">Japan</option>
          <option value="Korea">Korea</option>
          <option value="India">India</option>
        </select>
      </div>
    </div>
  )
}
