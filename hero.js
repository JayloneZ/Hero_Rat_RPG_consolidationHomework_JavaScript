const _ = require('lodash');
const Hero = function (name, favoriteFood, quests) {
	this.name = name;
	this.health = 100;
	this.favoriteFood = favoriteFood;
	this.quests = quests;
};

Hero.prototype.talk = function (string) {
	console.log(string);
	return string;
};

module.exports = Hero;
