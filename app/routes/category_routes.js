
var ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {

	var categoryCollection = db.collection('categories')

	app.post('/categories', (req, res) => {
		// add funcitonality to add categories here
		console.log(req.body);
		const category = {name: req.body.name};
		categoryCollection.insert(category, (err, result) => {
			if (err) res.send({'error': "An error occured"});
			else res.send(result.ops[0]);
		});
	});

	app.get('/categories/:id', (req, res) => {
		const detail = { '_id': new ObjectID(req.params.id)};
		categoryCollection.findOne(detail, (err, category) => {
			if (err) res.send({'error': "An error occured"});
			else res.send(category);
		});
	});

	app.delete('/categories/:id', (req, res) => {
		const detail = { '_id': new ObjectID(req.params.id)};
		categoryCollection.remove(detail, (err, category) => {
			if (err) res.send({'error': "An error occured"});
			else res.send("Category " + req.params.id + " deleted!");
		});
	});

	app.put('/categories/:id', (req, res) => {
		const detail = { '_id': new ObjectID(req.params.id)};
		const category = {name: req.body.name};
		categoryCollection.update(detail, category, (err, result) => {
			if (err) res.send({'error': "An error occured"});
			else res.send(category);
		});
	});

	app.get('/categories', (req, res) => {
		categoryCollection.find().toArray((err, result) => {
			if (err) res.send({'error': "An error occured"});
			else res.send(result);
		})
	});
};