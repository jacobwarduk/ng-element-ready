(angular => {
	'use strict';

	const elementReady = ($timeout, $rootScope) => {
		return {
			restrict: 'A',
			link(scope, element, attrs) {
				$timeout(() => {
					element.ready(() => {
						scope.$apply(() => {
							$rootScope.$broadcast(`${attrs.elementReady}:ready`);
						});
					});
				});
			}
		};
	};

	elementReady.$inject = ['$timeout', '$rootScope'];

	angular
		.module('ElementReady', [])
		.directive('elementReady', elementReady)
	;
})(angular);
