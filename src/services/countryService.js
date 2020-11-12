var http = require('http');
var countryService = function(){
	var getCountryById = function(id,cb){
		var options= {

			host:'restcountries.eu',
			path:'/rest/v2/name/pakistan'
		};
		var callback = function(response){
			var api = '';
			response.on('data', function(chunk){
				api += chunk;
			});
			response.on('end', function() {
                        
            JSON.parse(api, function(err, result){
            		cb(err,result);
            		//cb(null,{description: "My Country From Json"});
            		
            });
        });

			};
			http.request(options,callback).end();
		
		
	};
	
	return {
		getCountryById: getCountryById
	};
};

module.exports = countryService;