import React, { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'

import LogIn from './authentication/LogIn'
import Registration from './authentication/Registration'
import ResetPassword from './authentication/ResetPassword'

export default function Authentication(props) {
  const [ isResetPasswordVisible, setIsResetPasswordVisible ] = useState(false)
  const [ email, setEmail ] = useState('')
  const [ name, setName ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ passwordConfirm, setPasswordConfirm ] = useState('')
  const checkbox = useRef(null)

  const [ t, i18n ] = useTranslation()

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

  function handleRegistrationSubmit(e) {
    e.preventDefault()
    if (password === passwordConfirm && password.length >= 6) {
      alert(`Your email is: ${email}, \nyour name is: ${name}, \nyour password is: ${password}.`)
    } else if (password !== passwordConfirm) {
      alert('Passwords should coincide.')
    } else if (password.length < 6) {
      alert('Password(s) should be 6 characters minimum.')
    }
  }

  function handleLogInSubmit(e) {
    e.preventDefault()
    alert(`Your email is: ${email}, \nyour password is: ${password}, \nyou ${checkbox.current.checked ? 'checked' : 'didn\'t check'} checkbox.`)
  }

  function showResetPassword(e) {
    e.preventDefault()
    setIsResetPasswordVisible(true)
  }

  function hideResetPassword() {
    setIsResetPasswordVisible(false)
  }

  return (
    <div className="position-absolute mt-5 p-5 bg-light" id="authModal">
      {
        !isResetPasswordVisible
        ? (
          <div>
            <button type="button" 
                    name="signIn" 
                    className={`btn ${props.isLogInTabVisible ? "btn-light" : "btn-info"} w-50 border-left border-top border-right rounded-0 px-auto shadow-none`} 
                    onClick={props.handleVisibility}>{t('Header|1')}</button>
            <button type="button" 
                    name="registration" 
                    className={`btn ${props.isLogInTabVisible ? "btn-info" : "btn-light"} w-50 border-left border-top border-right rounded-0 px-0 shadow-none`} 
                    onClick={props.handleVisibility}>{t('Authentication|1')}</button>
          </div>
        )
        : <div className="d-flex justify-content-center border-left border-top border-right pt-2"> 
            {t('Authentication|2')}
          </div>
      }
      {
        !isResetPasswordVisible
        ? (
          props.isLogInTabVisible
          ? <LogIn  email={email}
                    password={password}
                    showResetPassword={showResetPassword} 
                    handleChange={handleChange} 
                    handleLogInSubmit={handleLogInSubmit} 
                    checkbox={checkbox} />
          : <Registration email={email} 
                          name={name}
                          password={password}
                          passwordConfirm={passwordConfirm} 
                          handleChange={handleChange} 
                          handleRegistrationSubmit={handleRegistrationSubmit} />
        )
        : <ResetPassword hideResetPassword={hideResetPassword} />
      }
    </div>
  )
}
