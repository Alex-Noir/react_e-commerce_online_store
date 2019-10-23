import React, { Component } from 'react'
import { mobile_phones, laptops, tablets, productTemplate } from './data'

const Context = React.createContext()

class ContextProvider extends Component {
  constructor() {
    super()
    this.state = {
      bestOffers: [],
      mobilePhones: [],
      laptops: [],
      tablets: [],
      productTemplate: productTemplate
    }

    this.setBestOffers = this.setBestOffers.bind(this)
    this.setMobilePhones = this.setMobilePhones.bind(this)
    this.setLaptops = this.setLaptops.bind(this)
    this.setTablets = this.setTablets.bind(this)
    this.handleMobilePhoneItemInfo = this.handleMobilePhoneItemInfo.bind(this)
    this.handleLaptopItemInfo = this.handleLaptopItemInfo.bind(this)
    this.handleTabletItemInfo = this.handleTabletItemInfo.bind(this)
  }
  
  componentDidMount() {
    this.setBestOffers()
    this.setMobilePhones()
    this.setLaptops()
    this.setTablets()
  }

  setBestOffers() {
    let tempBestOffers = JSON.parse(JSON.stringify(mobile_phones))
    this.setState(() => {
      return { bestOffers: tempBestOffers }
    })
  }

  setMobilePhones() {
    let tempMobilePhones = JSON.parse(JSON.stringify(mobile_phones))
    this.setState(() => {
      return { mobilePhones: tempMobilePhones }
    })
  }

  setLaptops() {
    let tempLaptops = JSON.parse(JSON.stringify(laptops))
    this.setState(() => {
      return { laptops: tempLaptops }
    })
  }

  setTablets() {
    let tempTablets = JSON.parse(JSON.stringify(tablets))
    this.setState(() => {
      return { tablets: tempTablets }
    })
  }

  handleMobilePhoneItemInfo(id) {
    const mobilePhone = this.state.mobilePhones.find(mobilePhone => mobilePhone.id === id)
    this.setState(() => {
      return { productTemplate: mobilePhone }
    })
  }

  handleLaptopItemInfo(id) {
    const laptop = this.state.laptops.find(laptop => laptop.id === id)
    this.setState(() => {
      return { productTemplate: laptop }
    })
  }

  handleTabletItemInfo(id) {
    const tablet = this.state.tablets.find(tablet => tablet.id === id)
    this.setState(() => {
      return { productTemplate: tablet }
    })
  }

  render() {
    return (
      <Context.Provider value={{ 
        ...this.state,
        setBestOffers: this.setBestOffers,
        setMobilePhones: this.setMobilePhones,
        setLaptops: this.setLaptops,
        setTablets: this.setTablets,
        handleMobilePhoneItemInfo: this.handleMobilePhoneItemInfo,
        handleLaptopItemInfo: this.handleLaptopItemInfo,
        handleTabletItemInfo: this.handleTabletItemInfo
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

const ContextConsumer = Context.Consumer

export { ContextProvider, ContextConsumer }

