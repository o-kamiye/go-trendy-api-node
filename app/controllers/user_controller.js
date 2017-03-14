
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const User = mongoose.model('User');

exports.index = (req, res) => {
	res.json({ message: 'Go Trendy API (Magic of Node.JS)...' });
};

exports.login = (req, res) => {
	let username = req.body.username;
	let password = req.body.password;
	let loginDetails = { "username": username, "password": password };
	User.findOne(loginDetails, (err, user) => {
		if (err) res.send(err);
		if (!user)
			res.json({
				success: false,
				message: 'Authentication failed. Invalid username or password.'
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
