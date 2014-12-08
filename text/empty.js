(function (angular) {
	'use strict';

	angular.module('battlesnake.validators')
		.factory('emptyValidator', emptyValidator);

	function emptyValidator() {
		return function (str, value) {
			return !str == value;
		}
	}

})(window.angular);
