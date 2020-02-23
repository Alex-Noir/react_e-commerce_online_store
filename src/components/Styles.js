import styled from 'styled-components'

//App
export const DivWrapper = styled.div`
  min-height: 100%;
  position: relative;
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr 1200px 1fr;

  @media only screen and (max-width: 1216px) {
    grid-template-columns: 1fr 98% 1fr;
  }

  @media only screen and (max-width: 425px) {
    grid-template-columns: auto 100% auto;
  }
`
export const DivAuthWrapper = styled.div`
  grid-area: 1 / 1 / 4 / 4;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.6);
  z-index: 16;
  > div {
    width: auto;
    padding: 2rem;
    min-width: 320px;
    left: 50%;
    transform: translateX(-50%);
  }
`
export const DivAuthButtons = styled.div`
  width: 100%;
  > button {
    width: 50%;
  }
`

//Header
export const StyledHeader = styled.header`
  grid-area: 1 / 1 / 2 / 4;
  z-index: 1;
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  grid-column-gap: .08rem;
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

  @media only screen and (max-width: 686px) {
    grid-template-rows: auto auto;
    > :nth-child(3) {
      grid-area: 2 / 1 / 3 / 5;
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
  align-self: center;
  > input {
    width: 100%;
    padding-left: .5em;
    padding-right: .5em;
  }
  > button {
    width: auto;
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

  @media only screen and (max-width: 686px) {
    top: 107px;
  }  
`

//Container
export const DivGridContainer = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  grid-row-gap: 1rem;
`

//Carousel
export const DivCarousel = styled.div` 
  grid-area: 1 / 1 / 2 / 3;
  justify-self: center;
  width: 960px;
  img {
    width: 960px;
  }

  @media only screen and (max-width: 992px) {
    width: 760px;
    img {
      width: 760px;
    }
  } 

  @media only screen and (max-width: 768px) {
    width: 590px;
    img {
      width: 590px;
    }
  } 

  @media only screen and (max-width: 600px) {
    width: 320px;
    img {
      width: 320px;
    }
  } 
`

//BestOffers
export const DivBestOffers = styled.div`
  grid-area: 2 / 1 / 3 / 3;
`
export const DivProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 290px);
  grid-row-gap: .5rem;
  grid-column-gap: .5rem;
  justify-content: center;	
`

//MobilePhones/Laptops/TabletItemsDiscount
export const DivCountdown = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  justify-self: center;
  width: 100%;
  > img {
    width: 100%;
    height: 100%;
  }
  > :last-child {
    margin: auto;
  }
`
export const DivDiscountList = styled.div`
  grid-area: 2 / 1 / 3 / 3;
  display: grid;
  grid-template-columns: repeat(auto-fit, 290px);
  grid-row-gap: .5rem;
  grid-column-gap: .5rem;
  justify-content: center;	
`

//Mobile Phones/Laptops/Tablets
export const DivProducts = styled.div`
  grid-area: 1 / 1 / 2 / 3;
`

//Item
export const DivProductItem = styled.div`
  height: 400px;
  width: 290px;

  &:hover {
    box-shadow: .1rem .1rem 1rem .1rem rgba(0,0,0,.3);
  }

  > a {
    height: 100%;
  }
`

//Product Page, SearchResult
export const DivProductPage = styled.div`
  grid-area: 1 / 1 / 2 / 3;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr auto auto;
  grid-column-gap: 1rem;
  > :first-child {
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

  @media only screen and (max-width: 850px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto 1fr auto auto;
    > :first-child {
      grid-area: 1 / 1 / 2 / 2;
    }
    > :nth-child(2) {
      grid-area: 2 / 1 / 3 / 2;
      justify-self: center;
    }
    > :nth-child(3) {
      grid-area: 3 / 1 / 4 / 2;
      margin-top: 3rem;
      padding-left: 1rem;
      padding-right: 1rem;
    }
    > :nth-child(4) {
      grid-area: 4 / 1 / 5 / 2;
    }
    > :nth-child(5) {
      grid-area: 5 / 1 / 6 / 2;
    }
  }

  @media only screen and (max-width: 425px) {
    > :nth-child(2) {
      width: 320px;
      height: 320px;
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
      justify-self: end;
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

  @media only screen and (max-width: 600px) {
    > div {
      grid-template-rows: auto auto;
      grid-template-columns: auto 1fr;
      > :nth-child(2) {
        grid-area: 1 / 2 / 2 / 3;
        justify-self: center;
      }
      > :nth-child(3) {
        grid-area: 2 / 1 / 3 / 2;
      }
      > :nth-child(4) {
        grid-area: 2 / 2 / 3 / 3;
      }
    }
  }
`

//Cart
export const DivCart = styled.div`
  grid-area: 1 / 1 / 3 / 3;
  padding-left: 3em;
  padding-right: 3em;
    
  @media only screen and (max-width: 686px) {
    padding-left: 0;
    padding-right: 0;
  }
`

//CartListItem
export const DivCartListItem = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 2fr 1fr auto;
  grid-template-rows: auto;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
  > :first-child {
    grid-area: 1 / 1 / 2 / 2;
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
    justify-self: center;
  }
  > :nth-child(4) {
    grid-area: 1 / 4 / 2 / 5;
    justify-self: center;
  }
  > :last-child {
    grid-area: 1 / 5 / 2 / 6;
    justify-self: end;
  }

  @media only screen and (max-width: 600px) {
    grid-template-rows: auto auto;
    > :nth-child(3) {
      grid-area: 2 / 1 / 3 / 3;
      justify-self: start;
    }
    > :nth-child(4) {
      grid-area: 1 / 3 / 2 / 5;
    }
  }

  @media only screen and (max-width: 425px) {
    grid-template-rows: auto auto;
    > :nth-child(2) {
      grid-area: 1 / 2 / 2 / 5;
    }
    > :nth-child(3) {
      grid-area: 2 / 1 / 3 / 3;
      justify-self: start;
    }
    > :nth-child(4) {
      grid-area: 2 / 3 / 3 / 5;
    }
  }
`

//About
export const DivAbout = styled.div`
  grid-area: 1 / 1 / 3 / 3;
  > p > img {
    margin: 2rem;
    float: left;
  }
  @media only screen and (max-width: 600px) {
    > p > img {
      display: block;
      margin-left: auto;
      margin-right: auto;
      float: none;
    }
  }
`

//Contact Us
export const DivContactForm = styled.div`
  grid-area: 1 / 1 / 3 / 3;
`

//Footer
export const StyledFooter = styled.footer`
  grid-area: 3 / 1 / 4 / 4;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr repeat(4, auto) 1fr;
  grid-row-gap: 1rem;
  grid-column-gap: 1rem;
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

  @media only screen and (max-width: 1067px) {
    grid-template-rows: repeat(2, auto);
    grid-template-columns: repeat(2, 1fr);
    > :first-child {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }
    > :nth-child(2) {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
    }
    > :nth-child(3) {
      grid-row: 2 / 3;
      grid-column: 1 / 2;
    }
    > :last-child {
      grid-row: 2 / 3;
      grid-column: 2 / 3;
    }
  }

  @media only screen and (max-width: 686px) {
    grid-template-rows: repeat(4, auto);
    grid-template-columns: 1fr auto 1fr;
    > :first-child {
      grid-column: 2 / 3;
    }
    > :nth-child(2) {
      grid-row: 2 / 3;
    }
    > :nth-child(3) {
      grid-row: 3 / 4;
      grid-column: 2 / 3;
      align-items: center;
    }
    > :last-child {
      grid-row: 4 / 5;
      align-items: center;
    }
  }
`

//NoSuchPage
export const Div404 = styled.div`
  grid-area: 1 / 1 / 3 / 3;
`
