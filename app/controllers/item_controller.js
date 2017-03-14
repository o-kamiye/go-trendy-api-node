
const mongoose = require('mongoose');

const Item = mongoose.model('Item');

exports.getItems = (req, res) => {
	let category = req.param.category;
	let search = req.query.search;
	Item.find({category: category}, (err, task) => {
		if (err) res.send(err);
		res.json(task);
	});
};