module.exports = function (karma) {
	'use strict';

	karma.set({
		frameworks: ['jasmine'],

		files: [
			'app/lib/angular/angular.js',
			'app/lib/angular/angular-*.js',
			'test/lib/angular/angular-mocks.js',

			'app/js/**/*.js',
			'test/unit/**/*.js'
		],

		basePath: '../',

		exclude: [],

		reporters: ['progress'],

		port: 8080,

		runnerPort: 9100,

		colors: true,

		autoWatch: true,

		browsers: ['Chrome'],

		singleRun: false
	});
};