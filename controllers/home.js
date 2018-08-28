/**
 * GET /
 * Home page.
 */

var Service = require('../models/services');
var Feature = require('../models/features');
var Work = require('../models/works');
var Pricing = require('../models/pricing');
var Team = require('../models/team');
var Blog = require('../models/blog');
var Contact = require('../models/contact');

exports.index = async function(req, res) {
	const servicesData = await Service.findOne();
	const featuresData = await Feature.findOne();
	const worksData = await Work.findOne();
	const pricingData = await Pricing.findOne();
	const teamData = await Team.findOne();
	const blogData = await Blog.findOne();
	const contactData = await Contact.findOne();

	res.render('home', {
		servicesData,
		featuresData,
		worksData,
		pricingData,
		teamData,
		blogData,
		contactData
	});
};
