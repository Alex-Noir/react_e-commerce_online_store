import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Lists() {
  const [ t ] = useTranslation()

  return (
    <>
      <ul className="list-group">
        <li className="list-group-item bg-transparent p-0">
          <Link to="/about" className="text-warning nav-link">{t('Lists|1')}</Link>
        </li>
        <li className="list-group-item bg-transparent p-0">
          <Link to="/contact-us" className="text-warning nav-link">{t('Lists|2')}</Link>
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
      <ul className="list-group">
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
    </>
  )
}
