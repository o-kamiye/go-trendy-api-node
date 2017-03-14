
module.exports = function(app) {

	const userController = require('../controllers/user_controller');

	app.route('/login')
		.post(userController.login);

}