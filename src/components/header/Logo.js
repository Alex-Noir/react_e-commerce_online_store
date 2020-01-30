import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo(props) {
  return (
    <div className="mr-3">
      <Link to="/" className="logo" onClick={props.value.makeResultsInvisible}>
        <img src={require('../../img/logo.webp')} alt="logo" className="img-tumbnail" />
      </Link>
    </div>
  )
}
