angular.module("anthology")
// DIRECTIVES
.directive("footer", function() {
	return {
		restrict: "E",
		templateUrl: "js/directives/footer.html",
		replace: true
	}
})
.directive("matchRomanNumeral", function() {
	return {
		restrict: "E",
		templateUrl: "js/directives/matchRomanNumeral.html",
		replace: true
	}
})
.directive("matchScores", function() {
	return {
		restrict: "E",
		templateUrl: "js/directives/matchScores.html",
		replace: false
	}
})