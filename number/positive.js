(function (angular) {
	'use strict';

	angular.module('battlesnake.validators')
		.factory('positiveValidator', positiveValidator);

	function positiveValidator() {
		return function (str, value) {
			var val = parseFloat(str);
			return (val > 0) == value;
		}
	}

})(window.angular);
