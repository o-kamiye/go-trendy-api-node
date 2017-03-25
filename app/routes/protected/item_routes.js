
const routes = require('express').Router();

module.exports = (app) => {
  const itemController = require('../../controllers/item_controller');

  const authMiddleware = require('../../middleware/auth');

  routes.get('/items/:category', itemController.getItems);

  routes.post('/item', itemController.saveItem);

  app.use(routes);
}
