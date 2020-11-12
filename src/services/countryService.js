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
            		//cb(err,result);
            		cb(null,{"name":"Pakistan","topLevelDomain":[".pk"],"alpha2Code":"PK","alpha3Code":"PAK",
            			"callingCodes":["92"],"capital":"Islamabad","altSpellings":["PK","Pākistān",
            			"Islamic Republic of Pakistan","Islāmī Jumhūriya'eh Pākistān"],"region":"Asia",
            			"subregion":"Southern Asia","population":194125062,"latlng":[30.0,70.0],"demonym":
            			"Pakistani","area":881912.0,"gini":30.0,"timezones":["UTC+05:00"],
            			"borders":["AFG","CHN","IND","IRN"],"nativeName":"Pakistan","numericCode":"586","currencies":[{"code":"PKR","name":"Pakistani rupee","symbol":"₨"}],"languages":[{"iso639_1":"en","iso639_2":"eng",
            			"name":"English",
            			"nativeName":"English"},{"iso639_1":"ur","iso639_2":"urd",
            			"name":"Urdu","nativeName":"اردو"}],"translations":{"de":"Pakistan","es":"Pakistán","fr":"Pakistan","ja":"パキスタン","it":"Pakistan","br":"Paquistão","pt":"Paquistão",
            			"nl":"Pakistan","hr":"Pakistan","fa":"پاکستان"},"flag":"https://restcountries.eu/data/pak.svg","regionalBlocs":[{"acronym":"SAARC","name":"South Asian Association for Regional Cooperation",
            			"otherAcronyms":[],"otherNames":[]}],"cioc":"PAK"});
            		
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