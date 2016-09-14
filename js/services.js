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