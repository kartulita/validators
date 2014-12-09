(function (angular) {
	'use strict';

	angular.module('battlesnake.validators')
		.factory('validatorService', validatorService);

	/**
	 * @ngdoc service
	 * @name validatorService
	 *
	 * @param {string} name
	 * Name of the validator to get
	 *
	 * @returns {validator}
	 * Validator function, e.g. `(test expect [modelValue viewValue]) -> boolean`.
	 * `test` is the model value if one was specified by ngModel, or the view
	 * value otherwise.
	 */
	function validatorService($injector) {
		return function (name) {
			var func = $injector.get(name + 'Validator');
			if (!func) {
				throw new Error('Unknown validator: ' + name);
			}
			return func;
		};
	}

})(window.angular);
