import React, { Suspense, lazy } from 'react'
import { Route, Switch } from 'react-router-dom'
import { DivGridContainer } from './styles'
import { ContextConsumer } from '../context'

import Carousel from './container/Carousel'
import Products from './container/products/Products'
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
const SearchResults = lazy(() => import('./container/products/SearchResults'))
const NoSuchPage = lazy(() => import('./container/NoSuchPage'))

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
                  <>
                    <Route exact path="/" component={Carousel} />                  
                    <Suspense fallback={<>Loading...</>}>                      
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
                : <Suspense fallback={<>Loading...</>}>
                    <Route exact path="/" render={props => <SearchResults {...props} value={value} />} />
                  </Suspense>
              )
            }
          }
        </ContextConsumer>
      </div>
    </DivGridContainer>
  )
}
