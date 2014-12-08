(function (angular) {
	'use strict';

	angular.module('battlesnake.validators')
		.factory('passwordValidator', passwordValidator);

	function passwordValidator() {
		return function (str, value) {
			return (/[A-Z]/.test(str) && /[a-z]/.test(str) && /\d/.test(str) &&
				/[^A-Za-z\d]/.test(str)) == value;
		}
	}

})(window.angular);
