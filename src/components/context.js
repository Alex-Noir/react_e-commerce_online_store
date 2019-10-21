import React, { Component } from 'react';
import { mobile_phones, laptops, tablets, productTemplate } from './data';

const Context = React.createContext();

class ContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      bestOffers: [],
      mobilePhones: [],
      laptops: [],
      tablets: [],
      productTemplate: productTemplate
    };

    this.setBestOffers = this.setBestOffers.bind(this);
    this.setMobilePhones = this.setMobilePhones.bind(this);
    this.setLaptops = this.setLaptops.bind(this);
    this.setTablets = this.setTablets.bind(this);
    this.getItem = this.getItem.bind(this);
    this.onDetail = this.onDetail.bind(this);
  }
  
  componentDidMount() {
    this.setBestOffers();
    this.setMobilePhones();
    this.setLaptops();
    this.setTablets();
  }

  setBestOffers() {
    let tempBestOffers = JSON.parse(JSON.stringify(mobile_phones));
    this.setState(() => {
      return { bestOffers: tempBestOffers }
    })
  }

  setMobilePhones() {
    let tempMobilePhones = JSON.parse(JSON.stringify(mobile_phones));
    this.setState(() => {
      return { mobilePhones: tempMobilePhones }
    })
  }

  setLaptops() {
    let tempLaptops = JSON.parse(JSON.stringify(laptops));
    this.setState(() => {
      return { laptops: tempLaptops }
    })
  }

  setTablets() {
    let tempTablets = JSON.parse(JSON.stringify(tablets));
    this.setState(() => {
      return { tablets: tempTablets }
    })
  }

  getItem(id) {
    const product = this.state.bestOffers.find(item => item.id === id);
    return product;
  }

  onDetail(id) {
    const product = this.getItem();
    this.setState(() => {
      return { detailProduct: product }
    });
  }

  render() {
    return (
      <Context.Provider value={{ 
        ...this.state,
        setBestOffers: this.setBestOffers,
        setMobilePhones: this.setMobilePhones,
        setLaptops: this.setLaptops,
        setTablets: this.setTablets,
        getItem: this.getItem,
        onDetail: this.onDetail
      }}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

const ContextConsumer = Context.Consumer;

export { ContextProvider, ContextConsumer };