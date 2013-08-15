'use strict';

/* 필터 */

angular.module('myApp.filters', []).
	
	//%VERSION% 위치에 버전을 표시해준다.
	filter('interpolate', ['version', function(version) {
		return function(text) {
			return String(text).replace(/\%VERSION\%/mg, version);
		}
	}]);
