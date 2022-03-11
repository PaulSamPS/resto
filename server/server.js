const jsonServer = require('json-server');
const products = require('./products.json');
const slider = require('./slider.json');
const nav = require('./nav.json');
const cart = require('./cart.json');
const server = jsonServer.create();
const router = jsonServer.router({products, slider, nav, cart});
const middlewares = jsonServer.defaults(undefined);

server.use(middlewares);

server.use(jsonServer.bodyParser);
server.use((req, res, next) => {
  if (req.body.id) {
    console.log(req.body.id);
  }
  // Continue to JSON Server router
  next();
});
server.use('/api', router);

server.listen(3001, () => {
  console.log('JSON Server is running');
});
