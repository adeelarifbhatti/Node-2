var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

app.use(express.static('public'));

app.set('views','./src/view');
app.set('view engine', 'ejs');

app.get('/index-backup', function(req,res){
	res.render('index-backup', {title: 'my first app in EJS', menu: ['First','Second','Third','Fourth','fifth','sixth','seventh']});
});

app.get('/', function(req,res){
	res.render('index', {title: 'my first app in EJS', sideMenu: [

																	{Link: '/First', Text: 'First'}, 
																	{Link: '/Second', Text: 'Second'}, 
																	{Link: '/Third', Text: 'Third'}, 
																	{Link: '/Fourth', Text: 'Fourth'}, 
																	{Link: '/Fifth', Text: 'Fifth'}
																	
				]});
});

app.listen(port, function(err) {
	console.log("the server on port " + port);


});
