var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

var firstRoute = require('./src/routes/firstRoute');

var secondRouter= express.Router();
var thirdRouter= express.Router();
var fourthRouter= express.Router();
var fifthRouter= express.Router();

app.use(express.static('public'));

app.set('views','./src/view');
app.set('view engine', 'ejs');

/*
The following method is for the index-backup page, it along with index-back has no use.
*/
app.get('/index-backup', function(req,res){
	res.render('index-backup', {title: 'No Use of this Page', menu: ['First','Second','Third','Fourth','fifth','sixth','seventh']});
});
app.use('/first', firstRoute);
app.use('/second', secondRouter);
app.use('/third', thirdRouter);
app.use('/fourth', fourthRouter);
app.use('/fifth', fifthRouter);






app.get('/', function(req,res){
	res.render('index', {title: 'From Main', sideMenu: [

																	{Link: '/First', Text: 'First'}, 
																	{Link: '/Second', Text: 'Second'}, 
																	{Link: '/Third', Text: 'Third'}, 
																	{Link: '/Fourth', Text: 'Fourth'}, 
																	{Link: '/Fifth', Text: 'Fifth'}
																	
				]});
});


	secondRouter.route('/')
	.get(function (req,res) {
		res.render('second', {title: 'From Second', sideMenu: [

																	{Link: '/First', Text: 'First'}, 
																	{Link: '/Second', Text: 'Second'}, 
																	{Link: '/Third', Text: 'Third'}, 
																	{Link: '/Fourth', Text: 'Fourth'}, 
																	{Link: '/Fifth', Text: 'Fifth'}
																	
				]});
});
	thirdRouter.route('/')
	.get(function (req,res) {
		res.render('third', {title: 'From third', sideMenu: [

																	{Link: '/First', Text: 'First'}, 
																	{Link: '/Second', Text: 'Second'}, 
																	{Link: '/Third', Text: 'Third'}, 
																	{Link: '/Fourth', Text: 'Fourth'}, 
																	{Link: '/Fifth', Text: 'Fifth'}
																	
				]});
});

fourthRouter.route('/')
	.get(function (req,res) {
		res.render('fourth', {title: 'From Fourth', sideMenu: [

																	{Link: '/First', Text: 'First'}, 
																	{Link: '/Second', Text: 'Second'}, 
																	{Link: '/Third', Text: 'Third'}, 
																	{Link: '/Fourth', Text: 'Fourth'}, 
																	{Link: '/Fifth', Text: 'Fifth'}
																	
				]});
});

	fifthRouter.route('/')
	.get(function (req,res) {
		res.render('fifth', {title: 'From Fifth', sideMenu: [

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
