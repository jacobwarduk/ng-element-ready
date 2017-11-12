'use strict';
console.log('loaded the spec for element ready');
const angular = require('angular');

describe('elementReady', () => {
	let timeout;
	let compile;
	let scope;
	let element;
	let rootScope;

	beforeEach(() => {
		module('ElementReady');
	});

	describe('when compiled', () => {
		beforeEach(inject(($rootScope, $compile, $timeout) => {
			timeout = $timeout;
			compile = $compile;
			scope = $rootScope.$new();
			rootScope = $rootScope;
		}));

		it('should broadcast element:ready event when the element is ready', () => {
			spyOn(rootScope, '$broadcast').and.callThrough();
			element = compile(angular.element('<div element-ready="test-element"></div>'))(scope);

			timeout.flush();
			timeout.verifyNoPendingTasks();
			scope.$digest();

			element.ready(() => {
				scope.$apply(() => {
					expect(rootScope.$broadcast).toHaveBeenCalled();
					expect(rootScope.$broadcast).toHaveBeenCalledWith('test-element:ready');
				});
			});
		});
	});
});
