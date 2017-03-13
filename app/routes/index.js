
const category_routes = require('./category_routes');
const item_routes = require('./item_routes');
const user_routes = require('./user_routes');

module.exports = function(app) {
	category_routes(app);
	item_routes(app);
	user_routes(app);
	// put more routes here
}