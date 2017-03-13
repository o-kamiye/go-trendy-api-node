
const mongoose = require('mongoose');
const Category = mongoose.model('Category');

exports.getCategories = (req, res) => {
	Category.find({}, (err, task) => {
		if (err) res.send(err);
		res.json(task);
	});
};

exports.createCategory = (req, res) => {
	let category = new Category(req.body);
	category.save((err, task) => {
		if (err) res.send(err);
		res.json(task);
	});
};

exports.getCategory = (req, res) => {
	Category.findById(req.params.id, (err, task) => {
		if (err) res.send(err);
		res.json(task);
	});
};

exports.updateCategory = (req, res) => {
	Category.findOneAndUpdate(req.params.id, req.body, {new: true}, (err, task) => {
		if (err) res.send(err);
		res.json(task);
	});
};

exports.removeCategory = (req, res) => {
	Category.remove({_id: req.params.id},(err, task) => {
		if (err) res.send(err);
		res.json({ message: "Category deleted successfully!"});
	});
};