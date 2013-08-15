'use strict';

/* 지시자 */

angular.module('myApp.directives', []).

	//app-version 지시자 위치에 앱 버전을 표시해준다.
	directive('appVersion', ['version', function(version) {
		return function(scope, elm, attrs) {
			elm.text(version);
		};
	}]);
