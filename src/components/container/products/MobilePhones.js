import React from 'react'
import { StyledDivPhonesList } from '../../styles'
import { Link } from "react-router-dom"
import { ContextConsumer } from '../../context'

import MobilePhoneItem from './MobilePhoneItem'

export default function MobilePhones() {
  return (
    <StyledDivPhonesList className="d-flex flex-column justify-content-center">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Mobile Phones</li>
        </ol>
      </nav>
      <div className="d-flex flex-wrap justify-content-start">
        <ContextConsumer>
          {
            value => {
              return value.mobilePhones.map( mobilePhone => {
                return <MobilePhoneItem key={mobilePhone.id} mobilePhone = {mobilePhone}/>
              })
            }
          }
        </ContextConsumer>
      </div>
    </StyledDivPhonesList>
  )
}
