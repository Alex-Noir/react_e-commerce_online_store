//App
export const StyledDivWrapper = window.styled.div`
  min-height: 100vh;
`

// Header
export const StyledHeader = window.styled.header`
  z-index: 1;
`
export const StyledDivHeaderContent = window.styled.div`
  width: 1200px;
`
export const StyledSpanAccount = window.styled.span`
  font-size: 12px;
`

// Container
export const StyledDivGridContainer = window.styled.div`
  display: grid;
  grid-template-columns: 1fr 1200px 1fr;
  flex: 1 1 0;
`
export const StyledDivGridContent = window.styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: auto auto;
`

// Nav
export const StyledNav = window.styled.nav`
  min-width: 205px;
  max-width: 205px;
  grid-area: 1 / 1 / 2 / 2;
`
export const StyledLiCategory = window.styled.li`
  border-left: 2px solid red;
  border-bottom: 1px solid #acacac;
  border-right: 1px solid #acacac;
  font-size: 0.8125rem;
`

// Carousel
export const StyledDivCarousel = window.styled.div`
  width: 960px; 
  grid-area: 1 / 2 / 2 / 3;
  justify-self: end;
`
export const StyledDivCarouselItem = window.styled.div`
  transition: transform 0.5s ease-in-out !important;
`

//Mobile Phones
export const StyledDivPhonesList = window.styled.div`
  grid-area: 1 / 2 / 2 / 3;
  min-width: 960px;
`

// Products
export const StyledDivProducts = window.styled.div`
  grid-area: 2 / 2 / 3 / 3;
`

//Product
export const StyledProductItem = window.styled.div`
  height: 400px;
  width: 300px;
`

// Footer
export const StyledFooter = window.styled.footer`

`
export const StyledUlFooterList = window.styled.ul`
  width: 300px;
`
export const StyledDivFooter = window.styled.div`
  width: 300px;
`
