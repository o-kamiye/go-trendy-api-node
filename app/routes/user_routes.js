
module.exports = function(app) {

	const userController = require('../controllers/user_controller');

	app.route('/login')
		.post(userController.login);

	app.post('/login', (req, res) => {
		var username = req.body.username;
		var password = req.body.password;
		const user = {"username": username, "password": password};
		userCollection.findOne(user, (err, result) => {
			if (err) res.send({"Error":"An error occurred"});
			else res.send(result);
		});
	});
}