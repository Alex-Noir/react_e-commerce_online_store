import React from 'react'
import { StyledFooter, UlFooterList, DivFooter } from './styles'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import I18nButtons from './container/footer/I18nButtons'

export default function Footer() {
  const [ t, i18n ] = useTranslation()

  return (
    <StyledFooter className="bg-dark mt-5 py-3">
      <ul className="list-group list-group-flush">
        <li className="list-group-item bg-transparent p-0">
          <Link to="/about" className="text-warning nav-link">{t('Footer|1')}</Link>
        </li>
        <li className="list-group-item bg-transparent p-0">
          <Link to="/contact_us" className="text-warning nav-link">{t('Footer|2')}</Link>
        </li>
        <li className="list-group-item bg-transparent p-0">
          <a href="/#" className="text-warning nav-link">Lorem ipsum sin amet</a>
        </li>
        <li className="list-group-item bg-transparent p-0">
          <a href="/#" className="text-warning nav-link">Lorem ipsum sin amet</a>
        </li>
        <li className="list-group-item bg-transparent p-0">
          <a href="/#" className="text-warning nav-link">Lorem ipsum sin amet</a>
        </li>
      </ul>
      <ul className="list-group list-group-flush">
        <li className="list-group-item bg-transparent p-0">
          <a href="/#" className="text-warning nav-link">Lorem ipsum sin amet</a>
        </li>
        <li className="list-group-item bg-transparent p-0">
          <a href="/#" className="text-warning nav-link">Lorem ipsum sin amet</a>
        </li>
        <li className="list-group-item bg-transparent p-0">
          <a href="/#" className="text-warning nav-link">Lorem ipsum sin amet</a>
        </li>
        <li className="list-group-item bg-transparent p-0">
          <a href="/#" className="text-warning nav-link">Lorem ipsum sin amet</a>
        </li>
        <li className="list-group-item bg-transparent p-0">
          <a href="/#" className="text-warning nav-link">Lorem ipsum sin amet</a>
        </li>
      </ul>
      <I18nButtons />
      <div>
        <form className="float-left">
          <label htmlFor="email" className="text-light">{t('Footer|3')}
            <input type="email" size="27" id="email"/>
            <input type="submit" value="Submit"></input>
          </label>
        </form>
        <div className="text-light">
          <div>{t('Footer|4')}:</div>
          <a href="/#" className="text-light mr-2"><i className="fab fa-facebook-square fa-2x"></i></a>
          <a href="/#" className="text-light mr-2"><i className="fab fa-twitter-square fa-2x"></i></a>
          <a href="/#" className="text-light mr-2"><i className="fab fa-instagram fa-2x"></i></a>
          <a href="/#" className="text-light mr-2"><i className="fab fa-youtube fa-2x"></i></a>
          <a href="/#" className="text-light mr-2"><i className="fab fa-linkedin fa-2x"></i></a>
          <div className="mt-5">&#169; 1991 - {new Date().getFullYear()} {t('Footer|5')}</div>
        </div>
      </div>
    </StyledFooter>
  )
}
