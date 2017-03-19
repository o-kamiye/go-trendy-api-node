
const routes = require('express').Router();

module.exports = (app) => {

	const userController = require('../../controllers/user_controller');

	const authMiddleware = require('../../middleware/auth');

	routes.post('/authenticate', userController.login);

	routes.post('/register', userController.register);

	routes.get('/', userController.index);

	// add middleware to authenticate future requests
	routes.use(authMiddleware.authenticate);

	routes.get('/users', userController.getAll);

	app.use('/api', routes);

}
