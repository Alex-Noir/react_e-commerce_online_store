import styled from 'styled-components'

//App
export const DivWrapper = styled.div`
  min-height: 100%;
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr 1200px 1fr;
`
export const DivAuthWrapper = styled.div`
  grid-area: 1 / 1 / 4 / 4;
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
  grid-area: 1 / 1 / 2 / 4;
  z-index: 1;
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  > :first-child {
    grid-area: 1 / 1 / 2 / 2;
    justify-self: center;
    align-self: center;
  }
  > :nth-child(2) {
    grid-area: 1 / 2 / 2 / 3;
    justify-self: center;
    align-self: center;
  }
  > :nth-child(3) {
    grid-area: 1 / 3 / 2 / 4;
  }
  > :last-child {
    grid-area: 1 / 4 / 2 / 5;
    > button {
      font-size: 12px;
      &:focus {
        outline: none;
      }
    }
  }
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
  width: 100%;
  align-self: center;
  > input {
    width: 96%;
    padding-left: 5px;
    padding-right: 5px;
  }
  > button {
    width: 4%;
  }
`

//Nav
export const StyledNav = styled.nav`
  min-width: 255px;
  max-width: 255px;
  position: absolute;
  top: 48px;
  left: -163px;
  > ul > li {
    border-left: 2px solid red;
    border-bottom: 1px solid #acacac;
    border-right: 1px solid #acacac;
    font-size: 0.8125rem;
  }
`

//Container
export const DivGridContainer = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  > div {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, auto);
  }
`

//Carousel
export const DivCarousel = styled.div`
  width: 960px;
  height: 500px;
  grid-area: 1 / 1 / 2 / 3;
  justify-self: center;
`

//MobilePhones/Laptops/TabletItemsDiscount
export const DivCountdown = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  justify-self: center;
  > :last-child {
    margin: auto;
  }
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

//Product Page, SearchResult
export const DivProductPage = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr auto;
  > nav {
    grid-area: 1 / 1 / 2 / 3;
  }
  > :nth-child(2) {
    width: 400px;
    height: 400px;
    grid-area: 2 / 1 / 3 / 2;
  }
  > :nth-child(3) {
    grid-area: 2 / 2 / 3 / 3;
  }
  > :nth-child(4) {
    grid-area: 3 / 1 / 4 / 3;
  }
  > :nth-child(5) {
    grid-area: 4 / 1 / 5 / 3;
    > div > button {
      width: auto;
    }
  }
`
export const DivInfo = styled.div`
  display: inline-block;
  width: auto;
  margin-top: 7px;
  background-color: rgba(248,80,50,1);
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: relative;
  z-index: 1;
`

//StarRating
export const IStar = styled.i`
  display: inline-block;
  width: 14px;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }
`

//Review
export const DivReview = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: auto 1fr;
  margin: 1.5rem;
  padding: 1.5rem;
  > img {
    grid-area: 1 / 1 / 3 / 2;
  }
  > span {
    grid-area: 1 / 2 / 2 / 3;
    > :nth-child(1):hover {
      opacity: 0.5;
      cursor: pointer;
    }
    > :nth-child(2) {
      margin-right: 1.2rem;
    }
  }
  > :nth-child(3) {
    grid-area: 2 / 2 / 3 / 3;
    > div {
      border: grey solid 1px;
    }
  }
  > :nth-child(4) {
    grid-area: 3 / 2 / 4 / 3;
  }
`

//SearchResults
export const DivSearchResults = styled.div`
  grid-area: 1 / 1 / 3 / 3;
  > div {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: auto 1fr 1fr 1fr;
    > :first-child {
      grid-area: 1 / 1 / 2 / 2;
      margin-right: 1rem;
    }
    > :nth-child(2) {
      grid-area: 1 / 2 / 2 / 3;
      align-self: start;
      justify-self: start;
      > a, a:hover, a:focus {
        text-decoration: none;
      }
      > a:hover, a:focus {
        text-shadow: 2px 2px 20px;
      }
    }
    > :nth-child(3) {
      grid-area: 1 / 3 / 2 / 4;
      align-self: center;
      justify-self: center;
      > :nth-child(2), :last-child {
        width: auto;
      }
    }
    > :nth-child(4) {
      grid-area: 1 / 4 / 2 / 5;
      align-self: start;
      justify-self: end;
    }
  }
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
  > :nth-child(2) {
    grid-area: 1 / 2 / 2 / 3;
    > a, a:hover, a:focus {
      text-decoration: none;
    }
    > a:hover, a:focus {
      text-shadow: 2px 2px 20px;
    }
  }
  > :nth-child(3) {
    grid-area: 1 / 3 / 2 / 4;
  }
  > :last-child {
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
export const StyledFooter = styled.footer`
  grid-area: 3 / 1 / 4 / 4;
  display: grid;
  grid-template-columns: 1fr repeat(4, 300px) 1fr;
  > :first-child {
    grid-column: 2 / 3;
  }
  > :nth-child(2) {
    grid-column: 3 / 4;
  }
  > :nth-child(3) {
    grid-column: 4 / 5;
  }
  > :last-child {
    grid-column: 5 / 6;
  }
`

//NoSuchPage
export const Div404 = styled.div`
  grid-area: 1 / 1 / 3 / 3;
`