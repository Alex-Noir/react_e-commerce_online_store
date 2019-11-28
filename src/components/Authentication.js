import React, { useState } from 'react'
import axios from 'axios'

import LogIn from './authentication/LogIn'
import Registration from './authentication/Registration'

export default function Authentication(props) {
  const [ email, setEmail ] = useState('')
  const [ name, setName ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ passwordConfirm, setPasswordConfirm ] = useState('')

  function handleRegistrationSubmit(e) {
    e.preventDefault()
    axios
      .post('https://test-47d09.firebaseio.com/users.json',
      {
        name: name,
        email: email,
        password: password,
        role: 'user'
      },
      { withCredetials: true })
      .then(res => { console.log(res) })
      .catch(err => { console.error('Since it is a demo SPA, you cannot register. ' + err) })
  }

  function handleLogInSubmit(e) {
    e.preventDefault()
    axios
      .get('https://test-47d09.firebaseio.com/users.json',
      { withCredetials: true })
      .then(res => { console.log(res) })
      .catch(err => { console.error(err) })
  }

  function handleChange(e) {
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    } else if (e.target.name === 'name') {
      setName(e.target.value)
    } else if (e.target.name === 'password') {
      setPassword(e.target.value)
    } else if (e.target.name === 'passwordConfirm') {
      setPasswordConfirm(e.target.value)
    }
  }

  return (
    <div className="position-absolute mt-5 p-5 bg-light" id="authModal">
      <div>
        <button type="button" name="signIn" className="btn btn-light border-left border-top border-right rounded-0 px-4 shadow-none" onClick={(e) => props.handleVisibility(e)}>Log In</button>
        <button type="button" name="registration" className="btn btn-light border-left border-top border-right rounded-0 px-4 shadow-none" onClick={(e) => props.handleVisibility(e)}>Registration</button>
      </div>
      {
        props.isLogInTabVisible
        ? <LogIn email={email}
                 password={password}
                 handleLogInSubmit={handleLogInSubmit}
                 handleChange={handleChange}
          />
        : <Registration email={email}
                        name={name}
                        password={password}
                        passwordConfirm={passwordConfirm}
                        handleRegistrationSubmit={handleRegistrationSubmit}
                        handleChange={handleChange}
          />
      }
    </div>
  )
}
