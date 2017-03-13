
module.exports = function(app) {

	const itemController = require('../controllers/item_controller');

	app.route('/items/:category')
		.get(itemController.getItems);

	app.get('/items/:category', (req, res) => {
		var category = req.param.category;
		var search = req.query.search;
		itemCollection.find({"category": category}).toArray((err, result) => {
			if (err) res.send({"Error": "An error occurred"});
			else res.send(result);
		});
	});
}