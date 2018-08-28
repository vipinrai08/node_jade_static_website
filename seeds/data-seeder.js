var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mate', { useNewUrlParser: true });

var Service = require('../models/services');
var Feature = require('../models/features');
var Work = require('../models/works');
var Pricing = require('../models/pricing');
var Team = require('../models/team');
var Blog = require('../models/blog');
var Contact = require('../models/contact');

var service = new Service({
	title: 'Our Services',
	description: 'ipsum dolor sit amet, consectetur.',
	services: [
		{
			title: 'Content Writing',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.',
			icon: 'pencil'
		},
		{
			title: 'Web Development',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.',
			icon: 'code'
		},
		{
			title: 'Business Consultancy',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.',
			icon: 'mustache'
		}
	]
});

service.save(function(err) {
	if (err) throw err;

	console.log('Data inserted.');
	//mongoose.disconnect();
});

var feature = new Feature({
	title: 'Some Features',
	description:
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos! Lorem ipsum dolor sit amet, consectetur.',
	features: [
		{
			title: 'Bootstrap 4 Based',
			description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
			icon: 'rocket'
		},
		{
			title: 'Fully Responsive',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.',
			icon: 'laptop-phone'
		},
		{
			title: 'Parallax Background',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.',
			icon: 'layers'
		},
		{
			title: 'Easy to Customize',
			description:
				'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut.',
			icon: 'cog'
		}
	]
});

feature.save(function(err) {
	if (err) throw err;

	console.log('Data inserted.');
});

var work = new Work({
	title: 'Our Portfolio',
	description: 'ipsum dolor sit amet, consectetur.',
	portfolios: [
		{
			image: 'img1.jpg',
			categories: [ 'Design', 'Developement', 'Print' ]
		},
		{
			image: 'img2.jpg',
			categories: [ 'Design', 'Developement', 'Print' ]
		},
		{
			image: 'img3.jpg',
			categories: [ 'Design', 'Developement', 'Print' ]
		},
		{
			image: 'img4.jpg',
			categories: [ 'Design', 'Developement', 'Print' ]
		},
		{
			image: 'img5.jpg',
			categories: [ 'Design', 'Developement', 'Print' ]
		},
		{
			image: 'img6.jpg',
			categories: [ 'Design', 'Developement', 'Print' ]
		}
	],
	title: 'watchourintrovideo',
	description:
		'Aliquam vestibulum cursus felis. In iaculis iaculis sapien ac condimentum. Vestibulum congue posuere lacus, id tincidunt nisi porta sit amet. Suspendisse et sapien varius, pellentesque dui non, semper orci.',
	video: 'film-play'
});

work.save(function(err) {
	if (err) throw err;

	console.log('Data inserted.');
});

var pricing = new Pricing({
	title: 'Pricing Table',
	description: 'ipsum dolor sit amet, consectetur.',
	demo: [
		{
			title: 'Free',
			price: '$00',
			features: [
				'Consectetur adipiscing',
				'Nunc luctus nulla et tellus',
				'Suspendisse quis metus',
				'Vestibul varius fermentum erat'
			]
		},
		{
			title: 'Popular',
			price: '$3.99',
			features: [
				'Consectetur adipiscing',
				'Nunc luctus nulla et tellus',
				'Suspendisse quis metus',
				'Vestibul varius fermentum erat'
			]
		},
		{
			title: 'Premium',
			price: '$9.50',
			features: [
				'Consectetur adipiscing',
				'Nunc luctus nulla et tellus',
				'Suspendisse quis metus',
				'Vestibul varius fermentum erat'
			]
		}
	]
});

pricing.save(function(err) {
	if (err) throw err;

	console.log('Data inserted.');
});

var team = new Team({
	title: 'Our Team',
	description: 'ipsum dolor sit amet, consectetur.',
	teams: [
		{
			image: 'team1.jpg',
			name: 'Jhon Doe',
			designation: 'Chief Technical Officer',
			social: {
				fb: '',
				twitter: '',
				googleplus: '',
				linkedin: ''
			}
		},
		{
			image: 'team2.jpg',
			name: 'Paul Kowalsy',
			designation: 'CEO & Co-Founder',
			social: {
				fb: '',
				twitter: '',
				googleplus: '',
				linkedin: ''
			}
		},
		{
			image: 'team3.jpg',
			name: 'Emilly Williams',
			designation: 'Business Manager',
			social: {
				fb: '',
				twitter: '',
				googleplus: '',
				linkedin: ''
			}
		},
		{
			image: 'team4.jpg',
			name: 'Patricia Green',
			designation: 'Graphic Designer',
			social: {
				fb: '',
				twitter: '',
				googleplus: '',
				linkedin: ''
			}
		}
	],
	testimonials: [
		{
			image: 'customer1.jpg',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. send do ',
			name: 'Jone Deam',
			designation: 'Fondor of Jalmori'
		},
		{
			image: 'customer2.jpg',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. send do',
			name: 'Oidila Matik',
			designation: 'President Lexo Inc'
		},
		{
			image: 'customer3.jpg',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. send do',
			name: 'Alex Dattilo',
			designation: 'CEO Optima Inc'
		},
		{
			image: 'customer4.jpg',
			description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. send do',
			name: 'Paul Kowalsy',
			designation: 'CEO Optima Inc'
		}
	]
});

team.save(function(err) {
	if (err) throw err;

	console.log('Data inserted.');
});

var blog = new Blog({
	title: 'Recent Blog',
	description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos! .',
	blogs: [
		{
			title: 'How often should you tweet?',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....',
			day: '2 Days Ago',
			comment: ' 24 Comments',
			image: "img1.jpg"
		},
		{
			title: 'Content is still king',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....',
			day: '2 Days Ago',
			comment: ' 24 Comments',
			image: "img2.jpg"
		},
		{
			title: 'Social media at work',
			description:
				'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua....',
			day: '2 Days Ago',
			comment: ' 24 Comments',
			image: "img3.jpg"
		}
	]
});

blog.save(function(err) {
	if (err) throw err;

	console.log('Data inserted.');
});

var contact = new Contact({
	title: 'Contact With us ',
	address: 'Centerville Road, DE 19808, US',
	phone: '+94 123 456 789',
	Email: 'contact@mate.com'
});

contact.save(function(err) {
	if (err) throw err;

	console.log('Data inserted.');
	mongoose.disconnect();
});
