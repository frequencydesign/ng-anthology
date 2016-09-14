angular.module("anthology")

.controller("anthologyController", ["$scope", "superbowlListService", function($scope, superbowlListService) {

	$scope.superbowlMatches = superbowlListService.GetSuperbowlList();

}])
