'use strict';

/* 컨트롤러 */

angular.module('myApp.controllers', []).
	
	//view1의 컨트롤러
	controller('MyCtrl1', ['$scope', function($scope) {

		$scope.test1 = 'ABC';

	}])

	//view2의 컨트롤러
	.controller('MyCtrl2', ['$scope', function($scope) {

		$scope.test2 = function() {
			return '안녕하세요!';
		};

	}]);