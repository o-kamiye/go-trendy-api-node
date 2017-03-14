
module.exports = function(app) {

	const itemController = require('../controllers/item_controller');

	app.route('/items/:category')
		.get(itemController.getItems);
}