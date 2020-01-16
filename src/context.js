import React, { Component } from 'react'
import { mobile_phones, data } from './components/data'
import axios from 'axios'

const Context = React.createContext()

class ContextProvider extends Component {
  constructor() {
    super()
    this.state = {
      bestOffers: [],
      data: [],
      searchValue: '',
      results: data,
      areResultsVisible: false,
      cartList: [],
      cartSubTotalPrice: 0,
      cartTax: 0,
      cartTotalPrice: 0,
      fetchedRates: {},
      currency: '€'
    }

    this.setBestOffers = this.setBestOffers.bind(this)
    this.setData = this.setData.bind(this)
    this.makeResultsInvisible = this.makeResultsInvisible.bind(this)
    this.addToCart = this.addToCart.bind(this)
    this.cartCounter = this.cartCounter.bind(this)
    this.deleteItemFromCart = this.deleteItemFromCart.bind(this)
    this.clearCart = this.clearCart.bind(this)
    this.evaluateTotalPrice = this.evaluateTotalPrice.bind(this)
    this.setSearchValue = this.setSearchValue.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.nullifySearchValue = this.nullifySearchValue.bind(this)
    this.postReview = this.postReview.bind(this)
    this.changeCurrency = this.changeCurrency.bind(this)
  }
  
  componentDidMount() {
    this.setBestOffers()
    this.setData()

    axios.get('https://api.exchangeratesapi.io/latest')
      .then(res => {
        this.setState(() => {
          return { fetchedRates: res.data.rates }
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  setBestOffers() {
    let tempBestOffers = JSON.parse(JSON.stringify(mobile_phones))
    this.setState(() => {
      return { bestOffers: tempBestOffers }
    })
  }

  setData() {
    let tempData = JSON.parse(JSON.stringify(data))
    this.setState(() => {
      return { data: tempData }
    })
  }

  makeResultsInvisible() {
    this.setState(() => {
      return { areResultsVisible: false }
    })
  }

  addToCart(id, inputValue) {
    const item = this.state.data[id]
    const price = item.price
    const cartList = this.state.cartList
    const arrayOfIds = cartList.map(cartListItem => cartListItem.id)
    const idOfCartListItem = cartList.findIndex(( cartListItem => cartListItem.id === id ))

    if (inputValue >= 1 && arrayOfIds.indexOf(id) === -1) {
      item.isInCart = true
      item.amountInCart += Number.parseFloat(inputValue)
      const amountInCart = item.amountInCart
      item.totalPrice = Number.parseFloat((price * amountInCart).toFixed(2))
      cartList.push(item)
      this.setState(() => {
        return { cartList }
      })
    } else if (inputValue >= 1 && arrayOfIds.indexOf(id) !== -1) {
      cartList[idOfCartListItem].amountInCart += inputValue
      const amountInCart = item.amountInCart
      item.totalPrice = Number.parseFloat((price * amountInCart).toFixed(2))
    } else { return null }
  }

  cartCounter(e, id) {
    const item = this.state.data[id]
    const price = item.price
    const cartList = this.state.cartList
    const idOfCartListItem = cartList.findIndex(( cartListItem => cartListItem.id === id ))

    if (e.target.name === '-' && cartList[idOfCartListItem].amountInCart > 1) {
      cartList[idOfCartListItem].amountInCart -= 1
      const amountInCart = item.amountInCart
      item.totalPrice = Number.parseFloat((price * amountInCart).toFixed(2))
      this.setState(() => {
        return { cartList }
      })
    } else if (e.target.name === '-' && cartList[idOfCartListItem].amountInCart <= 1) {
      return null
    } else if (e.target.name === '+') {
      cartList[idOfCartListItem].amountInCart += 1 
      const amountInCart = item.amountInCart
      item.totalPrice = Number.parseFloat((price * amountInCart).toFixed(2))
      this.setState(() => {
        return { cartList }
      })
    }
    
  }

  deleteItemFromCart(id) {
    const cartList = this.state.cartList
    const cartListItemIndex = cartList.findIndex(cartListItem => cartListItem.id === id)
    cartList.splice(cartListItemIndex, 1)
    this.setState(() => {
      return { cartList }
    })
  }

  clearCart() {
    this.setState(() => {
      return { cartList: [] }
    })
  }

  evaluateTotalPrice() {
    const cartList = this.state.cartList
    let cartSubTotalPrice = 0
    this.state.cartList.map(cartListItem => cartSubTotalPrice += cartListItem.totalPrice)
    const cartTax = parseFloat((cartSubTotalPrice * 0.1).toFixed(2))
    const cartTotalPrice = cartSubTotalPrice + cartTax
    this.setState(() => {
      return {
        cartList,
        cartSubTotalPrice,
        cartTax,
        cartTotalPrice
      }
    })
  }

  setSearchValue(e) {
    let searchQuery = (String(e.target.value)).trim()
    this.setState(() => {
      return {
        searchValue: searchQuery
      }
    })
  }

  handleSearch(e) {
    e.preventDefault()
    e.persist()
    let filteredData = this.state.data.filter(dataItem => dataItem.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    if (this.state.value !== '') {
      this.setState(() => {
        return {
          results: filteredData,
          areResultsVisible: true
        }
      })
    } else { return null }    
  }

  nullifySearchValue() {
    this.setState(() => {
      return {
        searchValue: ''
      }
    })
  }

  postReview(id, html) {
    const review = {
      user: "User",
      content: html
    }
    const item = data[id]
    const reviews = item.reviews
    reviews.push(review)    
  }

  changeCurrency(e) {
    const selectedCurrency = e.target.value
    this.setState(() => {
      return {
        currency: selectedCurrency
      }
    })
  }

  render() {
    return (
      <Context.Provider value={{ 
        ...this.state,
        setBestOffers: this.setBestOffers,
        setData: this.setData,
        makeResultsInvisible: this.makeResultsInvisible,
        addToCart: this.addToCart,
        cartCounter: this.cartCounter,
        deleteItemFromCart: this.deleteItemFromCart,
        clearCart: this.clearCart,
        evaluateTotalPrice: this.evaluateTotalPrice,
        setSearchValue: this.setSearchValue,
        handleSearch: this.handleSearch,
        nullifySearchValue: this.nullifySearchValue,
        postReview: this.postReview,
        changeCurrency: this.changeCurrency
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

const ContextConsumer = Context.Consumer

export { Context, ContextProvider, ContextConsumer }
