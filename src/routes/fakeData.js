var express = require('express');
var fakeData = express.Router();

var router = function (sideMenu) {
	fakeData.route('/addData').get(function (req,res) {
		res.send('inserting fakeData');


	});


return fakeData;
}

module.exports = router;