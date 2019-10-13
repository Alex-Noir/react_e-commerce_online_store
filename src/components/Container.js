import React from 'react';
import Carousel from './container/Carousel';
import Products from './container/Products';
import MobilePhones from './container/MobilePhones';
import Laptops from './container/Laptops';
import Tablets from './container/Tablets';
import ProductPage from './container/ProductPage';
import About from './container/About';
import ContactUs from './container/ContactUs';
import { StyledDivGridContainer } from './styles';
import { Route } from "react-router-dom";

export default function Container() {
  return (
    <StyledDivGridContainer>
      <div className="no-gutters justify-content-between">
        <Route exact path="/" component={Carousel}/>
        <Route exact path="/" component={Products}/>
        <Route path="/mobile_phones" component={MobilePhones}/>
        <Route path="/laptops" component={Laptops}/>
        <Route path="/tablets" component={Tablets}/>
        <Route path="/product_page" component={ProductPage}/>
        <Route path="/about" component={About}/>
        <Route path="/contact_us" component={ContactUs}/>
      </div>
    </StyledDivGridContainer>
  )
}
