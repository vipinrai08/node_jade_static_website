var mongoose = require('mongoose');

var featuresSchema = new mongoose.Schema({
	title: {
		type: String
	},
	description: {
		type: String
	},
	features: [
		{
			title: String,
			description: String,
			icon: String
		}
	]
});

var Features = mongoose.model('Features', featuresSchema);

module.exports = Features;
