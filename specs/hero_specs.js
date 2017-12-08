const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');
const Task = require('../task.js');

describe('Hero', function () {
	let grains;
	let oats;
	let chocolate;
	let quest1;
	let quest2;
	let hero;

	beforeEach(function () {
		grains = new Food('grains', 20);
		oats = new Food('oats', 30);
		chocolate = new Food('chocolate', 30);
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

	it('should be able to set a health value', function () {
		hero.setHealth(50);
		assert.strictEqual(hero.health, 50);
	});

	it('should be able to eat', function () {
		hero.setHealth(50);
		hero.eat(chocolate);
		assert.strictEqual(hero.health, 80);
	});

	it('should have a health value that does not exceed 100', function () {
		hero.setHealth(90);
		hero.eat(chocolate);
		assert.strictEqual(hero.health, 100);
	});

	it('should increase health value by 1.5 times when eating favorite food', function () {
		hero.setHealth(50);
		hero.eat(oats);
		assert.strictEqual(hero.health, 95);
	});

	it('should be able to sort quests by difficulty', function () {
		hero.sortQuestsBy('difficulty');
		assert.deepEqual(hero.quests, [quest2, quest1]);
	});

	it('should be able to sort quests by urgency', function () {
		hero.sortQuestsBy('urgency');
		assert.deepEqual(hero.quests, [quest2, quest1]);
	});

	it('should be able to sort quests by reward', function () {
		hero.sortQuestsBy('reward');
		assert.deepEqual(hero.quests, [quest2, quest1]);
	});

	it('should be able to sort quests by completed', function () {
		quest1.setCompleted(true);
		assert.deepEqual(hero.sortCompleted(true), [quest1]);
	});

	it('should be able to sort quests by uncompleted', function () {
		assert.deepEqual(hero.sortCompleted(false), [quest1, quest2]);
	});
});
