import styled from 'styled-components'

//App
export const DivWrapper = styled.div`
  min-height: 100vh;
`
export const DivLoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.6);
  z-index: 16;
  > div {
    left: 50%;
    transform: translateX(-50%);
  }
`

//Header
export const StyledHeader = styled.header`
  z-index: 1;
  > div {
    width: 1200px;
  }
  > div > div > button {
    &:focus {
      outline: none;
    }
  }
`
export const ButtonLogin = styled.button`
  font-size: 12px;
`
export const DivIconAmountInCart = styled.div`
  width: 21px;
  height: 21px;
  font-size: 0.8em;
  text-align: center;
  vertical-align: middle;
  top: 13px;
  right: 8px;
`

//Search
export const FormSearchBar = styled.form`
  flex-grow: 2;
  display: flex;
  > input {
    flex-grow: 2;
    border: none;
    &:focus {
      outline: none;
    }
  }
  > button {
    right: 27px;
    &:focus {
      outline: none;
    }
  }
`

//Container
export const DivGridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1200px 1fr;
  flex: 1 1 0;
  > div {
    grid-area: 1 / 2 / 2 / 3;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
  }
`

//Nav
export const StyledNav = styled.nav`
  min-width: 305px;
  max-width: 305px;
  position: absolute;
  top: 58px;
  left: 355px;
  > ul > li {
    border-left: 2px solid red;
    border-bottom: 1px solid #acacac;
    border-right: 1px solid #acacac;
    font-size: 0.8125rem;
  }
`

//Carousel
export const DivCarousel = styled.div`
  width: 960px;
  height: 500px;
  grid-area: 1 / 1 / 2 / 3;
  justify-self: center;
  > div > div {
    transition: transform 0.5s ease-in-out !important;
  }
`

//MobilePhones/Laptops/TabletItemsDiscount
export const DivCountdown = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  justify-self: center;
`
export const DivDiscountList = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  justify-self: center;
`

//Products
export const DivProducts = styled.div`
  grid-area: 2 / 1 / 3 / 3;
`

//Mobile Phones/Laptops/Tablets
export const DivPhonesList = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  min-width: 960px;
`

//Item
export const DivProductItem = styled.div`
  height: 400px;
  width: 290px;
`

//Product Page
export const DivProductPage = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr;
  > nav {
    grid-area: 1 / 1 / 2 / 3;
  }
  > img {
    grid-area: 2 / 1 / 3 / 2;
  }
  > div {
    grid-area: 2 / 2 / 3 / 3;
  }
`
export const DivInfo = styled.div`
  width: 120px;
  background-color: rgba(248,80,50,1);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  top: -5px;
  left: 105%;
  z-index: 1;
`

//Cart
export const DivCart = styled.div`
  grid-area: 1 / 1 / 3 / 3;
  > button {
    position: relative;
    left: 1032px;
  }
`

//CartListItem
export const DivCartListItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr;
  grid-template-rows: auto;
  > img {
    grid-area: 1 / 1 / 2 / 2;
    margin-right: 1rem;
  }
  > div :first-child {
    grid-area: 1 / 2 / 2 / 3;
  }
  > div :nth-child(2) {
    grid-area: 1 / 3 / 2 / 4;
  }
  > div :last-child {
    grid-area: 1 / 4 / 2 / 5;
  }
`

//About
export const DivAbout = styled.div`
  grid-area: 1 / 1 / 3 / 3;
`

//Contact Us
export const DivContactForm = styled.div`
  grid-area: 1 / 1 / 3 / 3;
`

//Footer
export const UlFooterList = styled.ul`
  width: 300px;
`
export const DivFooter = styled.div`
  width: 300px;
`
