var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser =require('cookie-parser');
var passport = require('passport');



var app = express();
var port = process.env.PORT || 8080;
var sideMenu = [		
										{Link: '/First', Text: 'Countries'}, 
										{Link: '/Second', Text: 'Capitals'}, 
										/*{Link: '/Third', Text: 'SignUp'}, 
										{Link: '/Fourth', Text: 'SignIn'}, */
										{Link: '/Fifth', Text: 'Load Data'}
																
		    ];

var firstRoute = require('./src/routes/firstRoute')(sideMenu);
var secondRoute = require('./src/routes/secondRoute')(sideMenu);
var thirdRoute = require('./src/routes/thirdRoute')(sideMenu);
var fourthRoute = require('./src/routes/fourthRoute')(sideMenu);
var fifthRoute = require('./src/routes/fifthRoute')(sideMenu);
var fakeData = require('./src/routes/fakeData')(sideMenu);
var authRouter = require('./src/routes/authRouter')(sideMenu);

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(session({secret: 'learning'}));
require('./src/config/passport')(app);

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
app.use('/fakeData', fakeData);
app.use('/auth', authRouter);

app.get('/', function(req,res){
	res.render('index', {title: 'From Main', sideMenu: sideMenu});

	});
app.listen(port, function(err) {
	console.log("the server on port " + port);


});
