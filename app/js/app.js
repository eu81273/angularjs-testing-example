'use strict';

// AngularJS 어플리케이션 모듈을 선언한다.
// 모듈의 디펜던시에 테스트에 사용될 필터와 서비스, 지시자, 컨트롤러를 포함해 준다.
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
		$routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
		$routeProvider.otherwise({redirectTo: '/view1'});
	}]);
