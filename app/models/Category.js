
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
	name: {
		type: String,
		Required: 'Please enter the name of the category'
	},
	Created_date: {
		type: Date,
		Default: Date.now
	}
});

module.exports = mongoose.model('Category', CategorySchema);