var mongoose = require('mongoose');

var worksSchema = new mongoose.Schema({
	title: {
		type: String
	},
	description: {
		type: String
	},
	portfolios: [
		{
			image: String,
			categories: Array
		}
	],
	title: {
		type: String
	},
	description: {
		type: String
	},
	video: {
		type: String
	}
});

var Works = mongoose.model('Works', worksSchema);

module.exports = Works;
