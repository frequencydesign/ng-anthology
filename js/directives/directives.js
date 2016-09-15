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
.directive("gameHeader", function() {
	return {
		restrict: "E",
		templateUrl: "js/directives/gameHeader.html",
		replace: true
	}
})
.directive("gameHero", function() {
	return {
		restrict: "E",
		templateUrl: "js/directives/gameHero.html",
		replace: true
	}
})
.directive("gameScores", function() {
	return {
		restrict: "E",
		templateUrl: "js/directives/gameScores.html",
		replace: true
	}
})
.directive("gameArticle", function() {
	return {
		restrict: "E",
		templateUrl: "js/directives/gameArticle.html",
		replace: true,
		scope: {
			title: "@",
			text: "="
		}
	}
})