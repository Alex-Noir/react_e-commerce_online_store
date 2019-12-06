import React, { useState } from 'react'
import { Route } from "react-router-dom"
import { DivWrapper, DivLoginWrapper } from './components/styles'

import Header from './components/Header'
import Authentication from './components/Authentication'
import Container from './components/Container'
import Footer from './components/Footer'

export default function App() {
  const [ isAuthModalVisible, setIsAuthModalVisible ] = useState(false)
  const [ isLogInTabVisible, setIsLogInTabVisible ] = useState(null)
  const [ isUserLoggedIn, setIsUserLoggedIn ] = useState(false)

  function closeAuthModal(e) {
    if (e.target.id === 'outsideAuthModal') {
      setIsAuthModalVisible(false)
      document.body.style.overflow = 'visible'
    }
  }

  function handleVisibility(e) {
    if (e.target.name === 'signIn') {
      setIsAuthModalVisible(true)
      setIsLogInTabVisible(true)
      document.body.style.overflow = 'hidden'
    } else if (e.target.name === 'registration') {
      setIsAuthModalVisible(true)
      setIsLogInTabVisible(false)
      document.body.style.overflow = 'hidden'
    }
  }

  return (
    <DivWrapper className="d-flex flex-column position-relative">
      <Route path="/" render={(props) => 
        <Header {...props} 
                handleVisibility={handleVisibility}
                isUserLoggedIn={isUserLoggedIn}
        />}
      />
      {
        isAuthModalVisible
        ? (
          <DivLoginWrapper className="position-absolute overflow-auto" id="outsideAuthModal" onClick={(e) => {closeAuthModal(e)}}>
            <Authentication isLogInTabVisible={isLogInTabVisible}
                            handleVisibility={handleVisibility}
            />
          </DivLoginWrapper>
        )
        : null
      }
      <Route path="/" component={Container}/>
      <Route path="/" component={Footer}/>
    </DivWrapper>
  )
}
