
"use strict";

const category_routes = require('./category_routes');
const item_routes = require('./item_routes');

module.exports = (app) => {
	category_routes(app);
	item_routes(app);
}
