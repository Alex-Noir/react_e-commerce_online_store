//App
export const StyledDivWrapper = window.styled.div`
  min-height: 100vh;
`

//Header
export const StyledHeader = window.styled.header`
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
export const StyledFormSearchBar = window.styled.form`
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
export const StyledSpanAccount = window.styled.span`
  font-size: 12px;
`

//Container
export const StyledDivGridContainer = window.styled.div`
  display: grid;
  grid-template-columns: 1fr 1200px 1fr;
  flex: 1 1 0;
  > div {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
  }
`

//Nav
export const StyledNav = window.styled.nav`
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
export const StyledDivCarousel = window.styled.div`
  width: 960px; 
  grid-area: 1 / 2 / 2 / 3;
  justify-self: center;
  > div > div {
    transition: transform 0.5s ease-in-out !important;
  }
`

//Products
export const StyledDivProducts = window.styled.div`
  grid-area: 2 / 2 / 3 / 3;
`

//Mobile Phones
export const StyledDivPhonesList = window.styled.div`
  grid-area: 1 / 2 / 2 / 3;
  min-width: 960px;
`

//MobilePhone/Laptop/TabletItem
export const StyledProductItem = window.styled.div`
  height: 400px;
  width: 290px;
`

//MobilePhones/Laptops/TabletItemsDiscount
export const StyledDivCountdown = window.styled.div`
  grid-area: 1 / 1 / 2 / 3;
  justify-self: center;
`
export const StyledDivDiscountList = window.styled.div`
  grid-area: 2 / 1 / 3 / 3;
  justify-self: center;
`

//Product Page
export const StyledDivProductPage = window.styled.div`
  grid-area: 1 / 2 / 2 / 3;
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

//About
export const StyledDivAbout = window.styled.div`
  grid-area: 1 / 1 / 2 / 3;
`

//Contact Us
export const StyledDivContactForm = window.styled.div`
  grid-area: 1 / 1 / 2 / 3;
`

//Footer
export const StyledUlFooterList = window.styled.ul`
  width: 300px;
`
export const StyledDivFooter = window.styled.div`
  width: 300px;
`
