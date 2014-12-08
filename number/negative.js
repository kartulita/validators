(function (angular) {
	'use strict';

	angular.module('battlesnake.validators')
		.factory('negativeValidator', negativeValidator);

	function negativeValidator() {
		return function (str, value) {
			var val = parseFloat(str);
			return (val < 0) == value;
		}
	}

})(window.angular);
