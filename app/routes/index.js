
const category_routes = require('./category_routes');

module.exports = function(app, db) {
	category_routes(app, db);
	// put more routes here
}