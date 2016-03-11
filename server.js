var express = require('express');
var app = express();

// for use when serving static files, like any other webserver does
// here it is put up to use the public folder, it could be any other folder
// 
// app.use(express.static('public')); 

// set the app to use the "view engine" "ejs"
// other view engines could also be used if you prefere
// handlebars, jade etc.
app.set('view engine', 'ejs'); 

// set up the route for localhost:3000/
app.get('/', function (req, res) {

	var obj = {
		name: 'Claus',
		title : 'about',

		getInfo : function () {
			return this.name + ' ' + this.title;
		}
	}
	res.render('about', obj);
});

// set up the route for localhost:3000/about
app.get('/about', function (req, res) {
	// fill out this function so it is showing some content
});

// make a contact route
// // set up the route for localhost:3000/contact

app.listen(3000);