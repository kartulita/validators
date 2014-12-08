(function (angular) {
	'use strict';

	angular.module('battlesnake.validators')
		.factory('maxLengthValidator', maxLengthValidator);

	function maxLengthValidator() {
		return function (str, value) {
			return str.length <= value;
		}
	}

})(window.angular);
