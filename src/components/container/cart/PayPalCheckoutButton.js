import React, { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export default function PayPalCheckoutButton(props) {
  const [ isBeingPaidFor, setIsBeingPaidFor ] = useState(false)

  const [ t ] = useTranslation()

  const paypalRef = useRef()

  const product = {
    price: props.cartTotalPrice
  }

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: 'desc',
                amount: {
                  currency_code: 'USD',
                  value: product.price
                }
              }
            ]
          })
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture()
          setIsBeingPaidFor(true)
          console.log(order)
        },
        locale: 'en_US',
        style: {
          color:  'gold',
          shape:  'pill',
          size: 'responsive',
          label:  'pay',
          height: 40
        }
      })
      .render(paypalRef.current)
  }, [])

  return (
    <div className="d-inline-flex">
      {
        isBeingPaidFor
        ? <h1>{t('PayPalCheckoutButton|1')}</h1>
        : <div ref={paypalRef} />
      }
    </div>
  )
}
