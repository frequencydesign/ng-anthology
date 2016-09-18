angular.module("anthology")

.controller("superbowlController", ["$scope", "superbowlDataService", function($scope, superbowlDataService) {

	$scope.isVisible = true;
	$scope.showHide = function() {
		$scope.isVisible = $scope.isVisible ? false : true;
	};

	$scope.superbowlData = superbowlDataService.GetSuperbowlData();

}])