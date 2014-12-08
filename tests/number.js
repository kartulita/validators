/**
 * @ngdoc test
 * @name number validators
 */
tests.push({
	name: 'number-validators',
	group: 'Number validators',
	modules: ['battlesnake.validators'],
	test: function (decimalValidator, floatValidator, intValidator, integerValidator, negativeValidator, positiveValidator) {

	function runTrials(validator, validatorName, trials, itfn) {
		itfn = itfn || function (trial, res) {
			return '"' + trial + '" ' + (res ? 'passes' : 'fails');
		};
		var res, func;
		for (var trial in trials) {
			res = trials[trial];
			func = new Function(validatorName,
				'return function () { expect(' + validatorName + '(' + JSON.stringify(trial) +
				', ' + JSON.stringify(res) + ')).to.equal(true); };')(validator);
			it(itfn(trial, res), func);
		}
	}

	describe('Decimal validator', function () {
		var validator = decimalValidator;
		var validatorName = 'decimalValidator';
		var trials = {
			'': false,
			'0': true,
			'+0': true,
			'-0': true,
			'+': false,
			'-': false,
			'+-0': false,
			'-+0': false,
			'--0': false,
			'.0': false,
			'0.0': true,
			'-12.345': true,
			'0x1234': false,
			'01234': true, /* Decimal, not octal */
			'1e+1': false,
			'1f+1': false
		};
		runTrials(validator, validatorName, trials);
	});

	describe('Float validator (parseFloat)', function () {
		var validator = floatValidator;
		var validatorName = 'floatValidator';
		var trials = {
			'1e+1': true,
			'-9.9e-99': true
		};
		runTrials(validator, validatorName, trials);
	});

	describe('Int validator (parseInt)', function () {
		var validator = intValidator;
		var validatorName = 'intValidator';
		var trials = {
			'0': true,
			'+251': true,
			'-30': true,
			'1.0': true,
			'.0': false,
			'1.': true,
			'5e+1': true /* Will probably be parsed as 5, not 50 */
		};
		runTrials(validator, validatorName, trials);
	});

	describe('Integer validator', function () {
		var validator = integerValidator;
		var validatorName = 'integerValidator';
		var trials = {
			'0': true,
			'+251': true,
			'-30': true,
			'1.0': false,
			'.0': false,
			'1.': false,
			'1e+1': false
		};
		runTrials(validator, validatorName, trials);
	});

	describe('Positive validator', function () {
		var validator = positiveValidator;
		var validatorName = 'positiveValidator';
		var trials = {
			'0': false,
			'+1': true,
			'-1': false,
			'+0': false,
			'-0': false
		};
		runTrials(validator, validatorName, trials);
	});

	describe('Negative validator', function () {
		var validator = negativeValidator;
		var validatorName = 'negativeValidator';
		var trials = {
			'0': false,
			'+1': false,
			'-1': true,
			'+0': false,
			'-0': false
		};
		runTrials(validator, validatorName, trials);
	});

}});
