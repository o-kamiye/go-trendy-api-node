
const mongoose = require('mongoose');

const User = mongoose.model('User');

exports.login = (req, res) => {
	let username = req.body.username;
	let password = req.body.password;
	let loginDetails = {"username": username, "password": password};
	User.findOne(loginDetails, (err, result) => {
		if (err) res.send(err);
		res.json(result);
	});
};