
const mongoose = require('mongoose');

const Item = mongoose.model('Item');

exports.getItems = (req, res) => {
	let category = req.params.category;
	let search = req.query.search;
	let requestArray = [{category: category}];
	if (search != "") requestArray.push({name: /search/});
	Item.find({ $and: requestArray}, (err, result) => {
		if (err) res.status(500).send(err);
		res.json(result);
	});
};

exports.saveItem = (req, res) => {
	let name = req.body.name;
	let price = req.body.price;
	let category = req.body.category;
	let description = req.body.description;
	let image_url = req.body.image_url;
	let sizes = req.body.sizes;

	// Do validation checks here before continuing
	let newItem = new Item({
		name: name,
		price: price,
		category: category,
		description: description,
		image_url: image_url,
		sizes: sizes
	});
	newItem.save((err) => {
		if (err) res.status(500).send(err);
		res.json({message: "Item created successfully"});
	});
};
