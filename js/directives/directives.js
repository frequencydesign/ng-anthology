angular.module("anthology")
// DIRECTIVES
.directive("matchRow", function() {
	return {
		restrict: "E",
		templateUrl: "js/directives/matchRow.html",
		replace: false
	}
})
.directive("matchRomanNumeral", function() {
	return {
		restrict: "E",
		templateUrl: "js/directives/matchRomanNumeral.html",
		replace: true
	}
})
.directive("footer", function() {
	return {
		restrict: "E",
		templateUrl: "js/directives/footer.html",
		replace: true
	}
})