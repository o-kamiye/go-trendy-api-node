
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
	email: Schema.Types.Mixed,
	username: Schema.Types.Mixed,
	image: Schema.Types.Mixed,
	phoneNumber: String
});

module.exports = mongoose.model('User', UserSchema);