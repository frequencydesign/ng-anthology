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
	var theIsVisible = true;
	return {
		restrict: "E",
		templateUrl: "js/directives/gameArticle.html?4",
		replace: true,
		scope: {
			title: "@",
			text: "=",
			isVisible: "=",
			showHide: "&"
		},
		link: function(scope, element, attrs) {
			//var isVisible = scope.isVisible;
/*			var showHide = function() {
				scope.isVisible = scope.isVisible ? false : true;
			};*/
			scope.isVisible = theIsVisible;
			scope.showHide = function() {
				scope.isVisible = scope.isVisible ? false : true;
			};
			console.log(scope);
			console.log(element);
			console.log(scope.isVisible);
			console.log(scope.showHide);
		}
	}
})
/*.directive("gameArticleContent", function() {
	return {
		restrict: "E",
		templateUrl: "js/directives/gameArticleContent.html?2",
		replace: true,
		scope: {
			text: "=",
			isVisible: "=",
			showHide: "&"
		},
		link: function(scope, element, attrs) {
		

		}
	}
})*/