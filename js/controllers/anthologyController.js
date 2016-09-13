angular.module("anthology")

.controller("anthologyController", ["$scope", "superbowlListService", function($scope, superbowlListService) {
	//console.log(superbowlListService.GetSuperbowlList);


	$scope.superbowlMatches = superbowlListService.GetSuperbowlList();

	console.log($scope.superbowlMatches);

}])
