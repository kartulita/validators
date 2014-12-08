/**
 * @ngdoc test
 * @name text validators
 */
tests.push({
	name: 'text-validators',
	group: 'Text validators',
	modules: ['battlesnake.validators'],
	test: function (emptyValidator, lengthValidator, minLengthValidator, maxLengthValidator, passwordValidator) {

	function runTrials(validator, validatorName, trials, itfn, fail) {
		itfn = itfn || function (trial, res) {
			return '"' + trial + '" ' + (res ? 'passes' : 'fails');
		};
		var res, func;
		for (var trial in trials) {
			res = trials[trial];
			func = new Function(validatorName,
				'return function () { expect(' + validatorName + '(' + JSON.stringify(trial) +
				', ' + JSON.stringify(res) + ')).to.equal(' + JSON.stringify(!fail) + '); };')(validator);
			it(itfn(trial, res), func);
		}
	}

	describe('Empty validator', function () {
		var validator = emptyValidator;
		var validatorName = 'emptyValidator';
		var trials = {
			'': true,
			'0': false,
			'false': false,
			'null': false,
			'undefined': false
		};
		runTrials(validator, validatorName, trials);
	});

	describe('Length validator', function () {
		var validator = lengthValidator;
		var validatorName = 'lengthValidator';
		var trials = {
			'': 0,
			'0': 1,
			'00': 2
		};
		runTrials(validator, validatorName, trials,
			function (trial, res) {
				return '"' + trial + '" has length ' + res;
			});
	});

	describe('Minimum length validator', function () {
		var validator = minLengthValidator;
		var validatorName = 'minLengthValidator';
		var nullTrials = {
			'': 2,
			'a': 2
		};
		var trials = {
			'': 0,
			'ab': 2,
			'a': 0,
			'abc': 2
		};
		runTrials(validator, validatorName, trials,
			function (trial, res) {
				return '"' + trial + '" has length of at least ' + res;
			});
		runTrials(validator, validatorName, nullTrials,
			function (trial, res) {
				return '"' + trial + '" does not have length of at least ' + res;
			},
			true);
	});

	describe('Maximum length validator', function () {
		var validator = maxLengthValidator;
		var validatorName = 'maxLengthValidator';
		var trials = {
			'': 2,
			'a': 2,
			'': 0,
			'ab': 2,
		};
		var nullTrials = {
			'a': 0,
			'abc': 2
		};
		runTrials(validator, validatorName, trials,
			function (trial, res) {
				return '"' + trial + '" has length of at most ' + res;
			});
		runTrials(validator, validatorName, nullTrials,
			function (trial, res) {
				return '"' + trial + '" does not have length of at most ' + res;
			},
			true);
	});

	describe('Password validator', function () {
		var validator = passwordValidator;
		var validatorName = 'passwordValidator';
		var trials = {
			'': false,
			'lemonPieAndPloominektar': false,
			'42bottlesOfPloominektar': false,
			'correct battery horse staple': false,
			'$ymbol': false,
			'P@$$w0rd': true,
			'; DROP TABLE users; -- 42': true
		};
		runTrials(validator, validatorName, trials);
	});

}});
