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
	let foodValue = food.replenishment;
	if (_.includes(this.favoriteFood, food)) {
		foodValue *= 1.5;
	};
	this.health += foodValue;
	if (this.health > 100) {
		this.health = 100;
	};
};

Hero.prototype.sortQuestsBy = function (metric) {
	const sortedQuests = _.sortBy(this.quests, function (quest) {
		return quest.metric;
	});
	this.quests = sortedQuests.reverse();
};

module.exports = Hero;
