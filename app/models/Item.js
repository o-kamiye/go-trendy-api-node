
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ItemSchema = new Schema({
	name: {
		type: String,
		Required: 'Please enter the item name'
	},
	price: Number,
	category: String,
	description: Schema.Types.Mixed,
	image_url: String,
	sizes: Array,
	userId: Schema.Types.Mixed,
	Created_at: {
		type: Date,
		Default: Date.now
	}
});

module.exports = mongoose.model('Item', ItemSchema);
