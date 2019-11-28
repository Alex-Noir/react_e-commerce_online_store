import React from 'react'

export default function Registration(props) {
  return (
    <div className="border-left border-bottom border-right p-2">
      <form className="d-flex flex-column" name="Registration" onSubmit={(e) => props.handleRegistrationSubmit(e)}>
        <label className="d-flex flex-column">
          Email:
          <input  type="email"
                  name="email"
                  value={props.email} 
                  onChange={(e) => props.handleChange(e)} 
                  required />
        </label>
        <label className="d-flex flex-column">
          Your name:
          <input  type="text"
                  name="name" 
                  value={props.name} 
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
        <label className="d-flex flex-column">
          Confirm password:
          <input  type="password" 
                  name="passwordConfirm" 
                  value={props.passwordConfirm} 
                  onChange={(e) => props.handleChange(e)} 
                  required />
        </label>
        <button type='submit' className="mt-1">Sign Up</button>
      </form>
    </div>
  )
}
