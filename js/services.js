angular.module("anthology")

.service("superbowlListService", ["$resource", function($resource) {

	this.GetSuperbowlList = function() {

/*
			var superbowlListJSON = $resource("http://api.myjson.com/bins/3a4my", 
				{
					callback: "JSON_CALLBACK"
				},
				{
					get: { method: "JSONP" }
				});
*/

			//var superbowlListJSON = $resource("http://api.myjson.com/bins/loey");
			var superbowlListJSON = $resource("/data/matches.json");
			return superbowlListJSON.get();

			//return $resource("/data/matches.json").get();

	};

}])

.service("superbowlDataService", ["$resource", function($resource) {

	this.GetSuperbowlData = function() {


			//var superbowlListJSON = $resource("http://api.myjson.com/bins/loey");
			var superbowlDataJSON = $resource("/data/superbowl.json");
			return superbowlDataJSON.get();

			//return $resource("/data/matches.json").get();

	};

}])

.service("superbowlSQLDataService", ["$resource", function($resource) {

	this.GetSuperbowlSQLData = function(year) {

		if ( (year != 1967) && (year != 1968) && (year != 1969) && (year != 1970) && (year != 1971) && (year != 1972) && (year != 1973) && (year != 1974) && (year != 1975) && (year != 1983) && (year != 1984) ) {
			year = 1983;
		}

		console.log("services year ", year);

		//var superbowlListJSON = $resource("http://api.myjson.com/bins/loey");
		//var addressDataJSON = $resource("http://127.0.0.1:3000/api/Addresses/4");
		//var addressDataJSON = $resource("http://127.0.0.1:3000/api/Addresses/" + year);


		var superbowlSQLDataJSON = $resource("http://cheesecakeeffect.com/api/Superbowls/" + year);
		//return superbowlSQLDataJSON.query(); // .query for ARRAY
		return superbowlSQLDataJSON.get();

		//return $resource("/data/matches.json").get();

	};

}])