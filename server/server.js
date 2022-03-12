const jsonServer = require('json-server');
const products = require('./products.json');
const slider = require('./slider.json');
const nav = require('./nav.json');
const server = jsonServer.create();
const router = jsonServer.router({products, slider, nav});
const middlewares = jsonServer.defaults(undefined);

server.use(middlewares);
server.use('/api', router);

server.listen(3001, () => {
  console.log('Сервер запущен на порту 3001');
});
