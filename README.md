## React E-Commerce Online Store

This is a demo website. Made with ReactJS (CRA). Fully responsive.

### [Dependencies](https://github.com/Alex-Noir/react_e-commerce_online_store/blob/master/package.json#L8)

### [CDN links](https://github.com/Alex-Noir/react_e-commerce_online_store/blob/master/public/index.html)

### What can you do in this demo:

- browse products
- use slider and magnifying glass
- search for products
- write/edit/delete product review with Rich Text Editor
- write Facebook commentaries 
- add/delete products to/from cart
- make fake payments
- change language (10 avaliable)
- change currency (7 avaliable)

### What did I use to make this demo:

- [Create React App](https://create-react-app.dev/)
- [Bootstrap](https://getbootstrap.com/) / [Bootstrap Flex](https://getbootstrap.com/docs/4.1/utilities/flex/)
- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [styled-components](https://styled-components.com/) ([code](https://github.com/Alex-Noir/react_e-commerce_online_store/blob/master/src/components/Styles.js))
- [Font Awesome](https://fontawesome.com/)
- [WebP Converter](https://webp-converter.com/)
- [Animate.css](https://github.com/daneden/animate.css) (code: [1](https://github.com/Alex-Noir/react_e-commerce_online_store/blob/master/src/components/header/CartButton.js#L11), [2](https://github.com/Alex-Noir/react_e-commerce_online_store/blob/master/src/components/Authentication.js#L46))
- [React Router](https://reacttraining.com/react-router/)
- [axios](https://github.com/axios/axios) ([code](https://github.com/Alex-Noir/react_e-commerce_online_store/blob/master/src/context.js#L38))
- [react-slick](https://github.com/akiran/react-slick) ([code](https://github.com/Alex-Noir/react_e-commerce_online_store/blob/master/src/components/container/Carousel.js#L26), [in combination with react-image-magnify](https://github.com/Alex-Noir/react_e-commerce_online_store/blob/master/src/components/container/products/productPage/Slider.js#L69))
- [react-image-magnify](https://github.com/ethanselzer/react-image-magnify) ([code](https://github.com/Alex-Noir/react_e-commerce_online_store/blob/master/src/components/container/products/productPage/Slider.js#L84))
- [react-quill](https://github.com/zenoamaro/react-quill) (code: [1](https://github.com/Alex-Noir/react_e-commerce_online_store/blob/master/src/components/container/products/productPage/Reviews.js#L90), [2 (as a published review)](https://github.com/Alex-Noir/react_e-commerce_online_store/blob/master/src/components/container/products/productPage/Review.js#L61))
- [Facebook Comments plugin](https://developers.facebook.com/docs/plugins/comments/) ([code](https://github.com/Alex-Noir/react_e-commerce_online_store/blob/master/src/components/container/products/productPage/Comments.js))
- [react-paypal-button-v2](https://github.com/Luehang/react-paypal-button-v2) ([code](https://github.com/Alex-Noir/react_e-commerce_online_store/blob/master/src/components/container/cart/PayPalCheckoutButton.js))
- [react-i18next](https://github.com/i18next/react-i18next), requiring [i18next](https://github.com/i18next/i18next) (code: [1](https://github.com/Alex-Noir/react_e-commerce_online_store/blob/master/src/i18n.js), [2](https://github.com/Alex-Noir/react_e-commerce_online_store/blob/master/src/components/footer/I18nButtons.js))

### Notes:

For the most of the languages I used Google Translator.

Since there is no backend and no session, some things are just simulations:

- modal window after log in/registration
- no actual product rating
- product review code made *as if* there can be more than one review from many users (ready made product review placed in [array](https://github.com/Alex-Noir/react_e-commerce_online_store/blob/master/src/components/container/products/productPage/Reviews.js#L108)), despite there can be *only* one product review in demo
 
