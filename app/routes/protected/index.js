
const user_routes = require('./user_routes');
const item_routes = require('./item_routes');

module.exports = (app) => {
  user_routes(app);
  item_routes(app);
}
