
module.exports = (app) => {

	const categoryController = require('../controllers/category_controller');

	app.route('/categories')
		.get(categoryController.getCategories)
		.post(categoryController.createCategory);


	app.route('/categories/:id')
		.get(categoryController.getCategory)
		.put(categoryController.updateCategory)
		.delete(categoryController.removeCategory);

};