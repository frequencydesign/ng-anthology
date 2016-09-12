angular.module("anthology")

.config(function($routeProvider) {
	$routeProvider

	.when("/", {
		templateUrl: "page-templates/home.html",
		controller: "anthologyController"
	})
	.when("/superbowl/:year", {
		templateUrl: "page-templates/superbowl.html",
		controller: "superbowlController"
	})
	.when("/superbowl", {
		templateUrl: "page-templates/superbowl.html",
		controller: "superbowlController"
	})
	.otherwise({redirectTo : '/'})
});