'use strict';

/* 필터 단위 테스트 */

describe('필터 단위 테스트', function() {
	beforeEach(module('myApp.filters'));

	describe('interpolate 필터 테스트', function() {
		beforeEach(module(function($provide) {
			$provide.value('version', 'TEST_VER');
		}));

		it('interpolate 필터 존재', inject(function(interpolateFilter) {
			expect(interpolateFilter).not.toEqual(null);
		}));
	
		it('VERSION 위치에 치환', inject(function(interpolateFilter) {
			expect(interpolateFilter('앞 %VERSION% 뒤')).toEqual('앞 TEST_VER 뒤');
		}));
	});
});
