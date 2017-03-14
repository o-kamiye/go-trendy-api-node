
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User');

exports.index = (req, res) => {
	res.json({ message: 'Well, api route is working well...' });
};

exports.login = (req, res) => {
	let username = req.body.username;
	let password = req.body.password;
	let loginDetails = {"username": username};
	User.findOne(loginDetails, (err, user) => {
		if (err) res.send(err);
		if (!user)
		res.json({
			success: false,
			message: 'Authentication failed. User not found.'
		});
		else if (user.password != password)
			res.json({
				success: false,
				message: 'Authentication failed. Wrong password'
			});
		else {
			let token = jwt.sign(user, req.app.get('secret'), {
				expiresIn: '1440m' // 24 hours
			});
			res.json({
				success: true,
				message: 'Enjoy your token',
				token: token
			});
		}
	});
};

exports.getAll = (req, res) => {
	User.find({}, (err, result) => {
		if (err) res.send(err);
		res.json(result);
	});
};
