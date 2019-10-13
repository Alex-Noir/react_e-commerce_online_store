import React, { Component } from 'react';
import { mobile_phones, productTemplate } from './data';

const Context = React.createContext();

class ContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      productTemplate: productTemplate
    };

    this.setProducts = this.setProducts.bind(this);
    this.getItem = this.getItem.bind(this);
    this.onDetail = this.onDetail.bind(this);
  }
  componentDidMount() {
    this.setProducts();
  }

  setProducts() {
    let tempProducts = JSON.parse(JSON.stringify(mobile_phones));
    this.setState(() => {
      return {products: tempProducts}
    })
  }

  getItem(id) {
    const product = this.state.products.find(item => item.id === id);
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
        setProducts: this.setProducts,
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