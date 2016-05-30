var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

var firstRoute = require('./src/routes/firstRoute');
var secondRoute = require('./src/routes/secondRoute');
var thirdRoute = require('./src/routes/thirdRoute');
var fourthRoute = require('./src/routes/fourthRoute');
var fifthRoute = require('./src/routes/fifthRoute');

app.use(express.static('public'));
app.set('views','./src/view');
app.set('view engine', 'ejs');

/*
The following method is for the index-backup page, it along with index-back has no use.
*/
app.get('/index-backup', function(req,res){
	res.render('index-backup', {title: 'No Use of this Page',menu: ['First','Second','Third','Fourth','fifth','sixth','seventh']});
});
app.use('/first', firstRoute);
app.use('/second', secondRoute);
app.use('/third', thirdRoute);
app.use('/fourth', fourthRoute);
app.use('/fifth', fifthRoute);

app.get('/', function(req,res){
	res.render('index', {title: 'From Main', sideMenu: [

																	{Link: '/First', Text: 'First'}, 
																	{Link: '/Second', Text: 'Second'}, 
																	{Link: '/Third', Text: 'Third'}, 
																	{Link: '/Fourth', Text: 'Fourth'}, 
																	{Link: '/Fifth', Text: 'Fifth'}
														]
																	
				});

	});
app.listen(port, function(err) {
	console.log("the server on port " + port);


});
