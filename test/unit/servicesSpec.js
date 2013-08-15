'use strict';

// 서비스 단위 테스트

describe('서비스 단위 테스트', function() {
	beforeEach(module('myApp.services'));

	describe('버전 서비스 테스트', function() {
		it('현재 버전 반환', inject(function(version) {
			expect(version).toEqual('0.1');
		}));
	});
});

