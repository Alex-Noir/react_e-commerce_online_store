import React from 'react'
import { Route } from "react-router-dom"
import { StyledDivGridContainer } from './styles'
import { SearchContextConsumer } from '../context'

import Carousel from './container/Carousel'
import MobilePhonesDiscount from './container/carousel/MobilePhonesDiscount'
import LaptopsDiscount from './container/carousel/LaptopsDiscount'
import TabletsDiscount from './container/carousel/TabletsDiscount'
import Products from './container/products/Products'
import SearchResults from './container/products/SearchResults'
import MobilePhones from './container/products/MobilePhones'
import Laptops from './container/products/Laptops'
import Tablets from './container/products/Tablets'
import ProductPage from './container/products/ProductPage'
import About from './container/footer/About'
import ContactUs from './container/footer/ContactUs'

export default function Container() {
  return (
    <StyledDivGridContainer>
      <div className="no-gutters justify-content-between">
        <SearchContextConsumer>
          {
            value => {
              return (
                !value.areResultsVisible
                ? [
                    <Route exact path="/" component={Carousel}/>,
                    <Route exact path="/" component={Products}/>,
                    <Route path="/mobile_phones_discount" component={MobilePhonesDiscount}/>,
                    <Route path="/laptops_discount" component={LaptopsDiscount}/>,
                    <Route path="/tablets_discount" component={TabletsDiscount}/>,
                    <Route path="/mobile_phones" component={MobilePhones}/>,
                    <Route path="/laptops" component={Laptops}/>,
                    <Route path="/tablets" component={Tablets}/>,
                    <Route path="/product_page" component={ProductPage}/>,
                    <Route path="/about" component={About}/>,
                    <Route path="/contact_us" component={ContactUs}/>
                  ]
                : <Route exact path="/" component={SearchResults}/>
              )
            }
          }
        </SearchContextConsumer>
      </div>
    </StyledDivGridContainer>
  )
}
