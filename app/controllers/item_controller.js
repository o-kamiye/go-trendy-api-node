
const mongoose = require('mongoose');

const Item = mongoose.model('Item');

exports.getItems = (req, res) => {
	Item.find({category: req.params.category}, (err, task) => {
		if (err) res.send(err);
		res.json(task);
	});
};