import React, { useState } from 'react'
import { DivInfo } from '../../../styles'
import { useTranslation } from 'react-i18next'

export default function AddToCart(props) {
  const { id, 
          hasDiscount, 
          isInCart, 
          amountInCart } = props.dataItem

  const [ inputValue, setInputValue ] = useState(0)
  const [ isInfoVisible, setIsInfoVisible] = useState(false)

  const [ t ] = useTranslation()
  
  function counter(e) {
    if (e.target.name === "-" && inputValue > 0) {
      setIsInfoVisible(false)
      setInputValue(inputValue - 1)
    } else if (e.target.name === "-" && inputValue <= 0) {
      return null
    } else if (e.target.name === "+") {
      setIsInfoVisible(false)
      setInputValue(inputValue + 1)
    }
  }

  function showInfo(inputValue) {
    if (inputValue >= 1) {
      setIsInfoVisible(true)
      setTimeout(() => setIsInfoVisible(false), 1500)
    } else { return null }
  }

  return (
    <>
      <h3 classname="d-flex">
        {t('AddToCart|1')} 
        <button className="btn btn-outline-dark border-right-0 rounded-0 ml-3"
                type="button" 
                value="-" 
                name="-" 
                onClick={counter}> - </button>
        <input  className="btn btn-outline-dark border-left-0 border-right-0 rounded-0"
                type="text" 
                value={inputValue} 
                size="1" 
                readOnly />
        <button className="btn btn-outline-dark border-left-0 rounded-0" 
                type="button" 
                value="+" 
                name="+" 
                onClick={counter}> + </button>
        <h6 className={isInCart ? "d-inline-flex bg-danger text-white mx-3 mb-0 p-1 rounded" 
                                : "d-inline-flex invisible"}>
          <span>{t('SearchResult|1')}</span> 
          <span>{amountInCart}</span>
        </h6>
      </h3>
      <div className="position-relative">
        <button type="button"
                className="btn btn-warning mr-2"
                onClick={() => {  props.value.addToCart(id, inputValue, hasDiscount)
                                  showInfo(inputValue)
                                  props.value.evaluateTotalPrice()  }}>{t('AddToCart|2')}</button>
        <DivInfo className={isInfoVisible ? "visible" : "invisible"}> 
          +{inputValue} {t('AddToCart|3')} 
        </DivInfo>
      </div>
    </>
  )
}
