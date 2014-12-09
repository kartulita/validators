(function (angular, _) {
	'use strict';

	angular.module('battlesnake.validators')
		.directive('validator', validatorsDirective)
		.directive('validators', validatorsDirective);

	function validatorsDirective(validatorService, hintParseService) {
		return {
			restrict: 'A',
			require: 'ngModel',
			link: link
		};

		function link(scope, element, attrs, ngModel) {
			var validators = hintParseService.parse(attrs.validators, [], true);
			_(validators)
				.each(function (kv) {
					var name = kv.key, val = kv.val;
					var func = validatorService(name);
					var target = func.async ? ngModel.$asyncValidators : ngModel.$validators;
					var validatorName = name + ':' + val.toString();
					target[validatorName] = function (modelValue, viewValue) {
						var value = modelValue === undefined ? viewValue : modelValue;
						return func(value, val, modelValue, viewValue);
					};
				});
		}
	}

})(window.angular, window._);
