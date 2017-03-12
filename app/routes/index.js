
const category_routes = require('./category_routes');
const item_routes = require('./item_routes');
const user_routes = require('./user_routes');

module.exports = function(app, db) {
	category_routes(app, db);
	item_routes(app, db);
	user_routes(app, db);
	// put more routes here
}