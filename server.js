var express = require('express');
var app = express();

//app.use(express.static('public'));

app.set('view engine', 'ejs');

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

app.listen(3000);
