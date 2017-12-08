const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');
const Task = require('../task.js');

describe('Hero', function () {
	let grains;
	let oats;
	let quest1;
	let quest2;
	let hero;

	beforeEach(function () {
		grains = new Food('grains', 20);
		oats = new Food('oats', 30);
		quest1 = new Task(3, 2, 300);
		quest2 = new Task(5, 5, 500);
		hero = new Hero('One-Punch', [grains, oats], [quest1, quest2]);
	});

	it('should have a name', function () {
		assert.strictEqual(hero.name, 'One-Punch');
	});

	it('should have favorite food', function () {
		assert.deepEqual(hero.favoriteFood, [grains, oats]);
	});

	it('should initially have full health', function () {
		assert.strictEqual(hero.health, 100);
	});

	it('should have quests to complete', function () {
		assert.deepEqual(hero.quests, [quest1, quest2]);
	});

	it('should be able to talk', function () {
		assert.strictEqual(hero.talk('10km run, 100 push-ups, 100 sit-ups'), '10km run, 100 push-ups, 100 sit-ups');
	});
});
