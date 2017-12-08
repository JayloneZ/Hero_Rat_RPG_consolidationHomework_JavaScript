const assert = require('assert');
const Task = require('../task.js');

describe('Task', function () {
	let quest1;

	beforeEach(function () {
		quest1 = new Task(3, 2, 300);
	});

	it('should have a difficulty', function () {
		assert.strictEqual(quest1.difficulty, 3);
	});

	it('should have an urgency level', function () {
		assert.strictEqual(quest1.urgency, 2);
	});

	it('should have a reward', function () {
		assert.strictEqual(quest1.reward, 300);
	});

	it('should have completed set to false', function () {
		assert.strictEqual(quest1.completed, false);
	});

	it('should change completed value', function () {
		quest1.setCompleted();
		assert.strictEqual(quest1.completed, true);
	});
});
