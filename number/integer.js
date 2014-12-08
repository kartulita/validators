(function (angular) {
	'use strict';

	angular.module('battlesnake.validators')
		.factory('integerValidator', integerValidator);

	function integerValidator() {
		return function (str, value) {
			return /^[+-]?\d+$/.test(str) == value;
		}
	}

})(window.angular);
