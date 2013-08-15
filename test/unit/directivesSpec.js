'use strict';

/* 지시자 단위 테스트 */

describe('지시자 단위 테스트', function() {
	beforeEach(module('myApp.directives'));

	describe('app-version 지시자 테스트', function() {
		it('현재 버전 출력', function() {
			module(function($provide) {
				$provide.value('version', 'TEST_VER');
			});
			inject(function($compile, $rootScope) {
				var element = $compile('<span app-version></span>')($rootScope);
				expect(element.text()).toEqual('TEST_VER');
			});
		});
	});
});
