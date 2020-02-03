import React, { useState, Suspense, lazy } from 'react'
import { Route } from 'react-router-dom'
import { DivWrapper } from './components/styles'

import Header from './components/Header'
import Container from './components/Container'
import Footer from './components/Footer'
const Authentication = lazy(() => import('./components/Authentication'))

export default function App() {
  const [ isAuthModalVisible, setIsAuthModalVisible ] = useState(false)
  const [ isLogInTabVisible, setIsLogInTabVisible ] = useState(null)

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
    <DivWrapper>
      <Route path="/" render={props => 
        <Header {...props} 
                handleVisibility={handleVisibility} />}
      />
      {
        isAuthModalVisible
        ? <Suspense fallback={<>Loading...</>}>
            <Authentication isLogInTabVisible={isLogInTabVisible}
                              closeAuthModal={closeAuthModal}
                              handleVisibility={handleVisibility} />
          </Suspense>
        : null
      }
      <Route path="/" component={Container} />
      <Route path="/" component={Footer} />
    </DivWrapper>
  )
}
