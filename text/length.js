(function (angular) {
	'use strict';

	angular.module('battlesnake.validators')
		.factory('lengthValidator', lengthValidator);

	function lengthValidator() {
		return function (str, value) {
			return str.length == value;
		}
	}

})(window.angular);
