(function (angular) {
	'use strict';

	angular.module('battlesnake.validators')
		.factory('decimalValidator', decimalValidator);

	function decimalValidator() {
		return function (str, value) {
			return /^[+-]?\d+(\.\d+)?$/.test(str) == value;
		}
	}

})(window.angular);
