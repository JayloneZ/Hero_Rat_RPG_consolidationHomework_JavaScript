const assert = require('assert');
const Food = require('../food.js');

describe('Hero', function () {
	let grains;
	let oats;

	beforeEach(function () {
		grains = new Food('grains', 20);
	});

	it('should have a name', function () {
		assert.strictEqual(grains.name, 'grains');
	});

	it('should have favorite food', function () {
		assert.deepEqual(grains.replenishment, 20);
	});
});
