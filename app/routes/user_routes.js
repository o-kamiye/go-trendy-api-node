
var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

	var userCollection = db.collection("users");

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