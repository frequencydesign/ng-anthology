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
		templateUrl: "js/directives/gameArticle.html?34",
		replace: true,
		scope: {
			title: "@",
			text: "=",
			isVisible: "=",
			showHide: "&"
		}
	}
})
.directive("gameArticleContent", function() {

/*	$scope.IsHidden = false;
	function ShowHide() {
		$scope.IsHidden = $scope.IsHidden ? false : true;
	}*/

	return {
		restrict: "E",
		templateUrl: "js/directives/gameArticleContent.html?50",
		replace: true,
		scope: {
			text: "=",
			isVisible: "=",
			showHide: "&"
		}
	}
})