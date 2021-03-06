const assert = require('assert');
const Food = require('../food.js');

describe('Food', function () {
	let grains;
	let oats;

	beforeEach(function () {
		grains = new Food('grains', 20);
	});

	it('should have a name', function () {
		assert.strictEqual(grains.name, 'grains');
	});

	it('should have a replenishment value', function () {
		assert.strictEqual(grains.replenishment, 20);
	});

	it('should be unpoisoned by default', function () {
		assert.strictEqual(grains.poisonous, false);
	});
});
