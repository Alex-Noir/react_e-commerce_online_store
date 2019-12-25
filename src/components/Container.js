import React from 'react'
import { Route, Redirect } from "react-router-dom"
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
                    <Route exact path="/" component={Carousel}/>
                    <Route exact path="/" component={Products}/>
                    <Route path="/mobile_phones_discount" component={MobilePhonesDiscount}/>
                    <Route path="/laptops_discount" component={LaptopsDiscount}/>
                    <Route path="/tablets_discount" component={TabletsDiscount}/>
                    <Route path="/mobile_phones" component={MobilePhones}/>
                    <Route path="/laptops" component={Laptops}/>
                    <Route path="/tablets" component={Tablets}/>
                    <Route path="/cart" component={Cart}/>
                    {
                      value.data.map( dataItem => {
                        return <Route key={dataItem.id}
                                      path={`/product_page/${dataItem.id}`} 
                                      render={(props) => <ProductPage {...props} dataItem={dataItem} value={value}/>}
                                />
                      })
                    }
                    <Route path="/about" component={About}/>
                    <Route path="/contact_us" component={ContactUs}/>
                  </React.Fragment>
                )
                : <Route exact path="/" component={SearchResults}/>
              )
            }
          }
        </ContextConsumer>
      </div>
    </DivGridContainer>
  )
}

{/* <Redirect exact from="/*" to="/" /> */}