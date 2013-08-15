'use strict';

/* 컨트롤러 단위 테스트 */

describe('controllers', function(){
	beforeEach(angular.mock.module('myApp.controllers'));

	it('MyCtrl1 컨트롤러 존재', inject(function($rootScope, $controller) {

		var $scope = $rootScope.$new();
		var ctrl = $controller('MyCtrl1', {
			$scope : $scope
		});

	}));

	it('MyCtrl2 컨트롤러 존재', inject(function($rootScope, $controller) {

		var $scope = $rootScope.$new();
		var ctrl = $controller('MyCtrl2', {
			$scope : $scope
		});

	}));
});
