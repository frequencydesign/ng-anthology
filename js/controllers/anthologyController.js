angular.module("anthology")

.controller("anthologyController", ["$scope", "superbowlListService", function($scope, superbowlListService) {
	var wholeMatchObject = superbowlListService.GetSuperbowlList();
	console.log(typeof wholeMatchObject);

/*
grab the data as an object of objects and arrays

pull out the specific object array and convert it to an array of match objects

push every 5 objects into a row inside an array

convert the array to be an object of arrays

add this array to the scope 

*/
	$scope.superbowlMatches = superbowlListService.GetSuperbowlList();
	console.log($scope.superbowlMatches.superBowls);

}])
