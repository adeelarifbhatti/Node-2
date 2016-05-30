var express = require('express');
var firstRoute = express.Router();

var fakeData = [
				{
					value1: 'fake value1', value2 : 'Microsoft', value3: 'fake value1'
				},
				{
					value1: 'fake value2', value2 : 'Oracle', value3: 'fake value2'
				},
				{
					value1: 'fake value3', value2 : 'IBM', value3: 'fake value3'
				},
				{
					value1: 'fake value4', value2 : 'Dell', value3: 'fake value4'
				},
				{
					value1: 'fake value5', value2 : 'Apple', value3: 'fake value5'
				}
			   ];



firstRoute.route('/').get(function (req,res){
	res.render('first', {title: 'From First', sideMenu: [																	{Link: '/First', Text: 'First'}, 
										{Link: '/Second', Text: 'Second'}, 
										{Link: '/Third', Text: 'Third'}, 
										{Link: '/Fourth', Text: 'Fourth'}, 
										{Link: '/Fifth', Text: 'Fifth'}
																
				        ], fakeData: fakeData
				    }
				);

 });

module.exports = firstRoute;
	