
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const passwordHash = require('password-hash-and-salt');

const User = mongoose.model('User');

exports.index = (req, res) => {
	res.json({ message: 'Go Trendy API (Magic of Node.JS)...' });
};

exports.login = (req, res) => {
	let username = req.body.username;
	let password = req.body.password;
	let loginDetails = { "username": username, "password": password };
	User.findOne(loginDetails, (err, user) => {
		if (err) res.status(500).send(err);
		if (!user)
			res.status(401).json({
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

exports.register = (req, res) => {
	let email = req.body.email;
	let username = req.body.username;
	let password = req.body.password;
	User.findOne({"username": username}, (err, user) => {
		if (err) res.status(500).send(err);
		if (user) res.status(409).json({
			username: 'Username address exists'
		});
		else
			User.findOne({"email": email}, (err, user) => {
				if (err) res.status(500).send(err);
				if (user) res.status(409).json({
					email: 'Email address exists'
				});
				else {
					passwordHash(password).hash((err, hash) => {
						if (err) res.status(500).send(err);
						password = hash;
					});
					let newUser = new User({
						email: email,
						username: username,
						password: password
					});
					newUser.save((err) => {
						if (err) res.status(500).send(err);
						res.json(newUser);
					});
				}
			});
	});
};

exports.getAll = (req, res) => {
	User.find({}, (err, result) => {
		if (err) res.status(500).send(err);
		res.json(result);
	});
};
