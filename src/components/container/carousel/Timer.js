import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function Timer() {
  const [ currentTime, setCurrentTime ] = useState(new Date())
  const [ endTime, setEndTime ] = useState(new Date(2020, 0, 12, 17, 27))
  const [ countdown, setCountdown ] = useState(null)

  const [ t, i18n ] = useTranslation()

  useEffect(() => {
    if (currentTime !== endTime) {
      setCountdown(setInterval( () => timer(), 1000 ))
    } else {
      return clearInterval(countdown)
    }

    return () => {
      clearInterval(countdown)
    }
  }, [])

  if (Math.sign(endTime - currentTime) === -1) { 
    clearInterval(countdown)
  }

  function timer() {
    setCurrentTime(new Date())
  }

  return (
    <span> {t('Timer|1')}: 
      { 
        (Math.sign(endTime - currentTime) !== -1) 
        ? (
          Math.floor((endTime - currentTime) / 1000 / 3600 / 24) + 
          ':' +
          new Date(endTime - currentTime).toLocaleTimeString(undefined, {hour12: false, timeZone: 'UTC'} )
        ) : (
          '0:00:00:00'
        )
      }
    </span>
  )
}


// constructor() {
//   super()
//   this.state = ({
//     currentTime: new Date(),
//     endTime: new Date(2019, 9, 19, 16, 5)
//   })

//   this.timer = this.timer.bind(this)
// }

//   componentDidMount() {
//     if (this.state.currentTime !== this.state.endTime) {
//       return this.countdown = setInterval( () => this.timer(), 1000 )
//     } else {
//       return clearInterval(this.countdown)
//     }
//   }
  
//   componentWillUnmount() {
//     clearInterval(this.countdown)
//   }

//   timer() {
//     this.setState({
//       currentTime: new Date()
//     })
//   }