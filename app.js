var express = require('express');

var app = express();
var port = process.env.PORT || 8080;

app.use(express.static('public'));

app.set('views','./src/view');
app.set('view engine', 'ejs');

app.get('/', function(req,res){
	res.render('index', {title: 'my first app in EJS', menu: ['First','Second','Third','Fourth','fifth','sixth','seventh']});
});

app.listen(port, function(err) {
	console.log("the server on port " + port);


});
