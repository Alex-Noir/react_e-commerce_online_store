import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo(props) {
  return (
    <>
      <Link to="/" className="logo" onClick={props.makeResultsInvisible}>
        <picture>
          <source media="(max-width: 600px)" srcSet={require('../../img/mini-logo.webp')} />
          <img src={require('../../img/logo.webp')} alt="logo" className="img-tumbnail" />
        </picture>
      </Link>
    </>
  )
}
