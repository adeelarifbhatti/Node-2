var countryService = function(){
	var getCountryById = function(id,cb){
		cb(null,{description: "My Country From Json"});
	};
	
	return {
		getCountryById: getCountryById
	};
};

module.exports = countryService;