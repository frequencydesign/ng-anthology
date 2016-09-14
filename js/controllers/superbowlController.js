angular.module("anthology")

.controller("superbowlController", ["$scope", "superbowlDataService", function($scope, superbowlDataService) {

	$scope.superbowlData = superbowlDataService.GetSuperbowlData();

}])