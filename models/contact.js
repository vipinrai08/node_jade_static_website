var mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
	title: {
		type: String
	},
	address: {
		type: String
	},
	phone: {
		type: String
	},
	Email: {
		type: String
	}
});
var Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
