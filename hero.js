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

Hero.prototype.setHealth = function (health) {
	this.health = health;
};

Hero.prototype.eat = function (food) {
	this.health += food.replenishment;
	if (this.health > 100) {
		this.health = 100;
	};
};

module.exports = Hero;
