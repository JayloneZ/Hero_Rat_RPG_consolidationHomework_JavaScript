const _ = require('lodash');
const Task = function (difficulty, urgency, reward) {
	this.difficulty = difficulty;
	this.urgency = urgency;
	this.reward = reward;
	this.completed = false;
};

Task.prototype.setCompleted = function () {
	this.completed = true;
};

module.exports = Task;
