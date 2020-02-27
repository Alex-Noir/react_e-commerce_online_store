import React, { useEffect } from 'react'

export default function Comments() {
  useEffect(() => {
    window.FB.XFBML.parse()
  })
  
  return (
    <div className="bg-light">
      <div  className="fb-comments" 
            data-href={window.location.href}
            data-width="100%" 
            data-numposts="10"
            data-order-by="reverse_time"></div>
    </div>
  )
}
