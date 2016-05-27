var express = require('express');

var app = express();
var port = process.env.PORT || 8080;
var firstRouter= express.Router();
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
app.use('/first', firstRouter);
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

firstRouter.route('/')
	.get(function (req,res) {
		res.render('first', {title: 'From First', sideMenu: [

																	{Link: '/First', Text: 'First'}, 
																	{Link: '/Second', Text: 'Second'}, 
																	{Link: '/Third', Text: 'Third'}, 
																	{Link: '/Fourth', Text: 'Fourth'}, 
																	{Link: '/Fifth', Text: 'Fifth'}
																	
				]});
});
	secondRouter.route('/')
	.get(function (req,res) {
		res.render('first', {title: 'From Second', sideMenu: [

																	{Link: '/First', Text: 'First'}, 
																	{Link: '/Second', Text: 'Second'}, 
																	{Link: '/Third', Text: 'Third'}, 
																	{Link: '/Fourth', Text: 'Fourth'}, 
																	{Link: '/Fifth', Text: 'Fifth'}
																	
				]});
});
	thirdRouter.route('/')
	.get(function (req,res) {
		res.render('first', {title: 'From third', sideMenu: [

																	{Link: '/First', Text: 'First'}, 
																	{Link: '/Second', Text: 'Second'}, 
																	{Link: '/Third', Text: 'Third'}, 
																	{Link: '/Fourth', Text: 'Fourth'}, 
																	{Link: '/Fifth', Text: 'Fifth'}
																	
				]});
});

fourthRouter.route('/')
	.get(function (req,res) {
		res.render('first', {title: 'From Fourth', sideMenu: [

																	{Link: '/First', Text: 'First'}, 
																	{Link: '/Second', Text: 'Second'}, 
																	{Link: '/Third', Text: 'Third'}, 
																	{Link: '/Fourth', Text: 'Fourth'}, 
																	{Link: '/Fifth', Text: 'Fifth'}
																	
				]});
});

	fifthRouter.route('/')
	.get(function (req,res) {
		res.render('first', {title: 'From Fifth', sideMenu: [

																	{Link: '/First', Text: 'First'}, 
																	{Link: '/Second', Text: 'Second'}, 
																	{Link: '/Third', Text: 'Third'}, 
																	{Link: '/Fourth', Text: 'Fourth'}, 
																	{Link: '/Fifth', Text: 'Fifth'}
																	
				]});
});
app.use('/first', firstRouter);


app.listen(port, function(err) {
	console.log("the server on port " + port);


});
