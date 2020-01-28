import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { DivGridContainer } from './styles'
import { ContextConsumer } from '../context'

import Carousel from './container/Carousel'
import MobilePhonesDiscount from './container/carousel/MobilePhonesDiscount'
import LaptopsDiscount from './container/carousel/LaptopsDiscount'
import TabletsDiscount from './container/carousel/TabletsDiscount'
import Products from './container/products/Products'
import MobilePhones from './container/products/MobilePhones'
import Laptops from './container/products/Laptops'
import Tablets from './container/products/Tablets'
import ProductPage from './container/products/ProductPage'
import Cart from './container/Cart'
import About from './container/footer/About'
import ContactUs from './container/footer/ContactUs'
import SearchResults from './container/products/SearchResults'
import NoSuchPage from './NoSuchPage'

export default function Container() {
  return (
    <DivGridContainer>
      <div className="no-gutters justify-content-between">
        <ContextConsumer>
          {
            value => {
              return (
                !value.areResultsVisible
                ? (
                  <React.Fragment>
                    <Route exact path="/" component={Carousel} />
                    <Switch>
                      <Route exact path="/" component={Products} />
                      <Route path="/mobile-phones-discount" component={MobilePhonesDiscount} />
                      <Route path="/laptops-discount" component={LaptopsDiscount} />
                      <Route path="/tablets-discount" component={TabletsDiscount} />
                      <Route path="/mobile-phones" component={MobilePhones} />
                      <Route path="/laptops" component={Laptops} />
                      <Route path="/tablets" component={Tablets} />
                      <Route path="/cart" render={props => <Cart {...props} value={value} />} />
                      {
                        value.data.map( dataItem => {
                          return <Route key={dataItem.id}
                                        path={`/product-page/${dataItem.id}`}
                                        render={props => <ProductPage {...props} dataItem={dataItem} value={value}/>} />
                        })
                      }
                      <Route path="/about" component={About} />
                      <Route path="/contact-us" component={ContactUs} />
                      <Route component={NoSuchPage} />
                    </Switch>
                  </React.Fragment>
                )
                : <Route exact path="/" render={props => <SearchResults {...props} value={value} />} />
              )
            }
          }
        </ContextConsumer>
      </div>
    </DivGridContainer>
  )
}
