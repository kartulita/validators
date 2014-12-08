(function (angular) {
	'use strict';

	angular.module('battlesnake.validators')
		.factory('floatValidator', floatValidator);

	function floatValidator() {
		return function (str, value) {
			return !isNaN(parseFloat(str)) == value;
		}
	}

})(window.angular);
