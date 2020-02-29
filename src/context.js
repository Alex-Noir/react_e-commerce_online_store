import React, { Component } from 'react'
import { data } from './components/data'

const Context = React.createContext()
class ContextProvider extends Component {
  constructor() {
    super()
    this.state = {
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
    this.changeCurrency = this.changeCurrency.bind(this)
  }
  
  async componentDidMount() {
    this.setData()

    try {
      const res = await window.axios.get('https://api.exchangeratesapi.io/latest')
      this.setState(() => {
        return { fetchedRates: res.data.rates }
      })
    } catch (err) {
      console.log(err)
    }
  }

  setData() {
    let tempData = []
    data.forEach(dataItem => {
      const item = {...dataItem}
      tempData = [...tempData, item]  
    })
    this.setState(() => {
      return { data: tempData }
    })
  }

  makeResultsInvisible() {
    this.setState(() => {
      return { areResultsVisible: false }
    })
  }

  addToCart(id, inputValue, hasDiscount) {
    const item = this.state.data[id]
    const price = item.price
    const discount = item.discount
    const cartList = this.state.cartList
    const arrayOfIds = cartList.map(cartListItem => cartListItem.id)
    const idOfCartListItem = cartList.findIndex(( cartListItem => cartListItem.id === id ))

    if (inputValue >= 1 && arrayOfIds.indexOf(id) === -1) {
      item.isInCart = true
      item.amountInCart += Number.parseFloat(inputValue)
      const amountInCart = item.amountInCart
      if (hasDiscount) {
        item.totalPrice = Number.parseFloat(((price * amountInCart) * discount).toFixed(2))
      } else {
        item.totalPrice = Number.parseFloat((price * amountInCart).toFixed(2))
      }
      cartList.push(item)
      this.setState(() => {
        return { cartList }
      })
    } else if (inputValue >= 1 && arrayOfIds.indexOf(id) !== -1) {
      cartList[idOfCartListItem].amountInCart += inputValue
      const amountInCart = item.amountInCart
      if (hasDiscount) {
        item.totalPrice = Number.parseFloat(((price * amountInCart) * discount).toFixed(2))
      } else {
        item.totalPrice = Number.parseFloat((price * amountInCart).toFixed(2))
      }
    } else { return null }
  }

  cartCounter(e, id, hasDiscount) {
    const item = this.state.data[id]
    const price = item.price
    const discount = item.discount
    const cartList = this.state.cartList
    const idOfCartListItem = cartList.findIndex(( cartListItem => cartListItem.id === id ))

    if (e.target.name === '-' && cartList[idOfCartListItem].amountInCart > 1) {
      cartList[idOfCartListItem].amountInCart -= 1
      const amountInCart = item.amountInCart
      if (hasDiscount) {
        item.totalPrice = Number.parseFloat(((price * amountInCart) * discount).toFixed(2))
      } else {
        item.totalPrice = Number.parseFloat((price * amountInCart).toFixed(2))
      }
      this.setState(() => {
        return { cartList }
      })
    } else if (e.target.name === '-' && cartList[idOfCartListItem].amountInCart <= 1) {
      return null
    } else if (e.target.name === '+') {
      cartList[idOfCartListItem].amountInCart += 1 
      const amountInCart = item.amountInCart
      if (hasDiscount) {
        item.totalPrice = Number.parseFloat(((price * amountInCart) * discount).toFixed(2))
      } else {
        item.totalPrice = Number.parseFloat((price * amountInCart).toFixed(2))
      }
      this.setState(() => {
        return { cartList }
      })
    }    
  }

  deleteItemFromCart(id) {
    const item = this.state.data[id]
    item.isInCart = false
    item.amountInCart = 0

    const cartList = this.state.cartList
    const cartListItemIndex = cartList.findIndex(cartListItem => cartListItem.id === id)
    cartList.splice(cartListItemIndex, 1)
    this.setState(() => {
      return { cartList }
    })
  }

  clearCart() {
    const data = this.state.data
    data.forEach(item => {
      item.isInCart = false
      item.amountInCart = 0      
    })
    
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
    let searchQuery = String(e.target.value)
    this.setState(() => {
      return {
        searchValue: searchQuery
      }
    })
  }

  handleSearch(e) {
    e.preventDefault()
    e.persist()

    let filteredData = this.state.data.filter(dataItem => dataItem.title.toLowerCase().includes(this.state.searchValue.toLowerCase().trim()))
    if (this.state.searchValue !== '') {
      this.setState(() => {
        return {
          results: filteredData,
          areResultsVisible: true,
          searchValue: this.state.searchValue.trim()
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
        changeCurrency: this.changeCurrency
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export { Context, ContextProvider }
