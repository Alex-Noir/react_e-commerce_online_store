import React, { Component } from 'react'
import { mobile_phones, laptops, tablets, data, productTemplate } from './components/data'

//ProductConxtext
const Context = React.createContext()

class ContextProvider extends Component {
  constructor() {
    super()
    this.state = {
      bestOffers: [],
      mobilePhones: [],
      laptops: [],
      tablets: [],
      data: [],
      productTemplate: productTemplate
    }

    this.setBestOffers = this.setBestOffers.bind(this)
    this.setMobilePhones = this.setMobilePhones.bind(this)
    this.setLaptops = this.setLaptops.bind(this)
    this.setTablets = this.setTablets.bind(this)
    this.setData = this.setData.bind(this)
    this.handleItem = this.handleItem.bind(this)
  }
  
  componentDidMount() {
    this.setBestOffers()
    this.setMobilePhones()
    this.setLaptops()
    this.setTablets()
    this.setData()
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

  setData() {
    let tempData = JSON.parse(JSON.stringify(data))
    this.setState(() => {
      return { data: tempData }
    })
  }

  handleItem(id, category) {
    const mobilePhone = this.state.mobilePhones.find(mobilePhone => mobilePhone.id === id)
    const laptop = this.state.laptops.find(laptop => laptop.id === id)
    const tablet = this.state.tablets.find(tablet => tablet.id === id)

    if (category === 'Mobile Phones') {
      this.setState(() => {
        return { productTemplate: mobilePhone }
      })
    } else if (category === 'Laptops') {
      this.setState(() => {
        return { productTemplate: laptop }
      })
    } else if (category === 'Tablets') {
      this.setState(() => {
        return { productTemplate: tablet }
      })
    }
  }

  render() {
    return (
      <Context.Provider value={{ 
        ...this.state,
        setBestOffers: this.setBestOffers,
        setMobilePhones: this.setMobilePhones,
        setLaptops: this.setLaptops,
        setTablets: this.setTablets,
        setData: this.setData,
        handleItem: this.handleItem
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

const ContextConsumer = Context.Consumer

export { Context, ContextProvider, ContextConsumer }

// SearchContext
const SearchContext = React.createContext()

class SearchContextProvider extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      results: tablets,
      areResultsVisible: false
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(e) {
    e.preventDefault()
    e.persist()
    this.setState(() => {
      return {
        value: ('' + e.target.value).trim(),
        results: this.state.results.filter(elem => elem.title.toLowerCase().includes(this.state.value.toLowerCase())),
        areResultsVisible: true
      }
    })
  }

  render() {
    return (
      <SearchContext.Provider value = {{
        ...this.state,
        handleSearch: this.handleSearch
      }}>
        {this.props.children}
      </SearchContext.Provider>
    )
  }
}

const SearchContextConsumer = SearchContext.Consumer

export { SearchContextProvider, SearchContextConsumer }