'use strict';

/* E2E 테스트 */

describe('AngularJS 어플리케이션', function() {


	beforeEach(function() {
		browser().navigateTo('../../app/index.html');
	});


	it('특별한 해시값을 지정하지 않을 경우 자동으로 /view1으로 이동', function() {
		expect(browser().location().url()).toBe("/view1");
	});


	describe('메뉴1 이동', function() {

		beforeEach(function() {
			browser().navigateTo('#/view1');
		});


		it('사용자가 /view1 로 이동할 경우 1번 페이지 렌더링', function() {
			expect(element('[ng-view] p:first').text()).
				toMatch(/1번 페이지/);
		});

	});


	describe('메뉴2 이동', function() {

		beforeEach(function() {
			browser().navigateTo('#/view2');
		});


		it('사용자가 /view2 로 이동할 경우 2번 페이지 렌더링', function() {
			expect(element('[ng-view] p:first').text()).
				toMatch(/2번 페이지/);
		});

	});
});
