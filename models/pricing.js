var mongoose = require('mongoose');

var pricingSchema = new mongoose.Schema({
	title: {
		type: String
	},
	description: {
		type: String
	},
	demo: [
		{
			title: String,
			price: String,
			features: Array
		}
	]
});

var Pricing = mongoose.model('Pricing', pricingSchema);

module.exports = Pricing;
