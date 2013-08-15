module.exports = function (karma) {
	'use strict';

	karma.set({
		frameworks: ['ng-scenario'],

		files: [
			'test/e2e/**/*.js'
		],

		basePath: '../',

		exclude: [],

		reporters: ['progress'],

		port: 8000,

		runnerPort: 9100,

		colors: true,

		autoWatch: true,

		browsers: ['Chrome'],

		singleRun: true,

		urlRoot: '/_karma_/',

	    proxies: {
	      '/': 'http://localhost:8000/'
	    }
	});
};