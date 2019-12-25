import React from 'react'

export default function LogIn(props) {
  return (
    <div className="border-left border-bottom border-right p-2">
      <form className="d-flex flex-column" name="LogIn" onSubmit={(e) => props.handleLogInSubmit(e)}>
        <label className="d-flex flex-column">
          Email:
          <input  type="email"
                  name="email"
                  value={props.email}
                  onChange={(e) => props.handleChange(e)}
                  required />
        </label>
        <label className="d-flex flex-column">
          Password:
          <input  type="password" 
                  name="password" 
                  value={props.password}
                  onChange={(e) => props.handleChange(e)}
                  required />
        </label>
        <button type='submit' className="mt-1">Log In</button>
      </form>
    </div>
  )
}
