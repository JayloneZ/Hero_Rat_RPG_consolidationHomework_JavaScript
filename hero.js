const _ = require('lodash');
const Hero = function (name, health, favoriteFood, quests) {
	this.name = name;
	this.health = health;
	this.favorite_food = favoriteFood;
	this.quests = quests;
};

Hero.prototype.talk = function (string) {
	console.log(string);
	return string;
};
