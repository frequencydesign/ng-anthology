angular.module("anthology")
// DIRECTIVES
.directive("matchRomanNumeral", function() {
	return {
		restrict: "E",
		templateUrl: "js/directives/matchRomanNumeral.html?6",
		replace: true
	}
})