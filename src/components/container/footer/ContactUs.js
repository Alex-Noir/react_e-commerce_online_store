import React from 'react'
import { StyledDivContactForm } from '../../styles'


export default function ContactUs() {
  return (
    <StyledDivContactForm className="d-flex flex-column bg-light rounded p-5">
      <h1>Contact us!</h1>
      <form>
        <div className="form-group">
          <label for="exampleFormControlInput1">Your e-mail:</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" required/>
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Your message:</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required></textarea>
        </div>
        <input className="btn btn-primary" type="submit" value="Submit"></input>
      </form>
    </StyledDivContactForm>
  )
}
