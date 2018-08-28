var mongoose = require('mongoose');

var servicesSchema = new mongoose.Schema({
	title: {
		type: String
	},
	description: {
		type: String
	},
	services: [
		{
			title: String,
			description: String,
			icon: String
		}
	]
});

var Service = mongoose.model('Service', servicesSchema);

module.exports = Service;
