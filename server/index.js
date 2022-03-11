const products = require('./products.json');
const slider = require('./slider.json');
const nav = require('./nav.json');
const cart = require('./cart.json');

module.exports = () => ({
  products: products,
  slider: slider,
  nav: nav,
  cart: cart
});
