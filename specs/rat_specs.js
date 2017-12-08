const assert = require('assert');
const Rat = require('../rat.js');
const Food = require('../food.js');

describe('Rat', function () {
	let rat;
	let grains;

	beforeEach(function () {
		rat = new Rat();
		grains = new Food('grains', 20);
	});

	it('can poison food', function () {
		rat.poison(grains);
		assert.strictEqual(grains.poisonous, true);
	});
});
