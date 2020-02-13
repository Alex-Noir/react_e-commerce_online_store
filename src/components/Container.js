import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import { DivGridContainer } from './styles'
import { ContextConsumer } from '../context'

import Carousel from './container/Carousel'
import BestOffers from './container/products/BestOffers'
import ProductPage from './container/products/ProductPage'
const MobilePhonesDiscount = lazy(() => import('./container/carousel/MobilePhonesDiscount'))
const LaptopsDiscount = lazy(() => import('./container/carousel/LaptopsDiscount'))
const TabletsDiscount = lazy(() => import('./container/carousel/TabletsDiscount'))
const MobilePhones = lazy(() => import('./container/products/MobilePhones'))
const Laptops = lazy(() => import('./container/products/Laptops'))
const Tablets = lazy(() => import('./container/products/Tablets'))
const Cart = lazy(() => import('./container/Cart'))
const About = lazy(() => import('./container/About'))
const ContactUs = lazy(() => import('./container/ContactUs'))
const SearchResults = lazy(() => import('./container/SearchResults'))
const NoSuchPage = lazy(() => import('./container/NoSuchPage'))

export default function Container() {
  return (
    <DivGridContainer className="no-gutters">
      <ContextConsumer>
        {
          value => {
            return (
              !value.areResultsVisible
              ? (
                <>
                  <Route exact path="/" component={Carousel} /> 
                  <Suspense fallback={ <i className="fa fa-cog fa-spin" style={{fontSize: '24px'}}></i> }> 
                    <Switch>
                      <Route exact path="/" component={BestOffers} />
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
                                        render={props => <ProductPage {...props} 
                                                                      value={value}
                                                                      dataItem={dataItem} />} />
                        })
                      }
                      <Route path="/about" component={About} />
                      <Route path="/contact-us" component={ContactUs} />
                      <Route component={NoSuchPage} />
                    </Switch>
                  </Suspense>
                </>
              )
              : <Suspense fallback={
                  <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">Loading...</span>
                  </div>
                }>
                  <Route exact path="/" render={props => <SearchResults {...props} value={value} />} />
                </Suspense>
            )
          }
        }
      </ContextConsumer>
    </DivGridContainer>
  )
}
