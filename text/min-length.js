(function (angular) {
	'use strict';

	angular.module('battlesnake.validators')
		.factory('minLengthValidator', minLengthValidator);

	function minLengthValidator() {
		return function (str, value) {
			return str.length >= value;
		}
	}

})(window.angular);
