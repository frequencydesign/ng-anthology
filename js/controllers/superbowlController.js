angular.module("anthology")

.controller("superbowlController", ["$scope", "superbowlDataService", "superbowlSQLDataService", function($scope, superbowlDataService, superbowlSQLDataService) {

	//$scope.isVisible = true;
/*	$scope.showHide = function() {
		$scope.isVisible = $scope.isVisible ? false : true;
	};*/

	function getParameterByName(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
				results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}

	$scope.year = getParameterByName('year');

	$scope.superbowlSQLData = superbowlSQLDataService.GetSuperbowlSQLData($scope.year);

	console.log($scope.year);
	console.log($scope.superbowlSQLData);

}])