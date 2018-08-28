var mongoose = require('mongoose');

var blogSchema = new mongoose.Schema({
	title: {
		type: String
	},
	description: {
		type: String
	},
	blogs: [
		{
			title: String,
			description: String,
			days: String,
			comments: String,
			image: String
		}
	]
});
var Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
