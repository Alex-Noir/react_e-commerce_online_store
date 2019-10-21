import React from 'react';
import { Route } from "react-router-dom";
import { StyledDivGridContainer } from './styles';

import Carousel from './container/Carousel';
import MobilePhonesDiscount from './container/products/carousel/MobilePhonesDiscount';
import LaptopsDiscount from './container/products/carousel/LaptopsDiscount';
import TabletsDiscount from './container/products/carousel/TabletsDiscount';
import Products from './container/Products';
import MobilePhones from './container/products/MobilePhones';
import Laptops from './container/products/Laptops';
import Tablets from './container/products/Tablets';
import ProductPage from './container/ProductPage';
import About from './container/About';
import ContactUs from './container/ContactUs';



export default function Container() {
  return (
    <StyledDivGridContainer>
      <div className="no-gutters justify-content-between">
        <Route exact path="/" component={Carousel}/>
        <Route exact path="/" component={Products}/>
        <Route path="/mobile_phones_discount" component={MobilePhonesDiscount}/>
        <Route path="/laptops_discount" component={LaptopsDiscount}/>
        <Route path="/tablets_discount" component={TabletsDiscount}/>
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
