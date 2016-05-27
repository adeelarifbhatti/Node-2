var express = require('express');

var app = express();
var port = process.env.PORT || 8080;
var firstRouter= express.Router();


app.use(express.static('public'));

app.set('views','./src/view');
app.set('view engine', 'ejs');

/*
The following method is for the index-backup page, it along with index-back has no use.
*/
app.get('/index-backup', function(req,res){
	res.render('index-backup', {title: 'No Use of this Page', menu: ['First','Second','Third','Fourth','fifth','sixth','seventh']});
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

firstRouter.route('/')
	.get(function (req,res) {
		res.render('first', {title: 'my first app in EJS', sideMenu: [

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
