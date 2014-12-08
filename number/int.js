(function (angular) {
	'use strict';

	angular.module('battlesnake.validators')
		.factory('intValidator', intValidator);

	function intValidator() {
		return function (str, value) {
			return !isNaN(parseInt(str)) == value;
		}
	}

})(window.angular);
