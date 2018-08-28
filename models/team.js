var mongoose = require('mongoose');

var teamSchema = new mongoose.Schema({
	title: {
		type: String
	},
	description: {
		type: String
	},
	teams: [
		{
			image: String,
			name: String,
			designation: String,
			socail: {
				fb: String,
				twitter: String,
				googleplus: String,
				linkedin: String
			}
		}
	],
	testimonials: [
		{
			image: {
				type: String
			},
			description: {
				type: String
			},
			name: {
				type: String
			},
			designation: {
				type: String
			}
		}
	]
});

var Team = mongoose.model('Team', teamSchema);

module.exports = Team;
