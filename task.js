const _ = require('lodash');
const Task = function (difficulty, urgency, reward) {
	this.difficulty = difficulty;
	this.urgency = urgency;
	this.reward = reward;
	this.completed = 0;
};

module.exports = Task;
