'use strict';

/* 컨트롤러 단위 테스트 */

describe('controllers 단위 테스트', function(){
	beforeEach(module('myApp.controllers'));

	var scope;

	it('MyCtrl1 컨트롤러 test1값', inject(function($rootScope, $controller) {

		scope = $rootScope.$new();
		var ctrl = $controller('MyCtrl1', {
			$scope : scope
		});

		expect(scope.test1).toBe('EFG');

	}));

	it('MyCtrl2 컨트롤러 test2값', inject(function($rootScope, $controller) {

		scope = $rootScope.$new();
		var ctrl = $controller('MyCtrl2', {
			$scope : scope
		});

		expect(scope.test2()).toBe('안녕히계세요!!');

	}));

});
