"use strict";
class dice {
  constructor(numberOfSides) {
    this.getNumberOfSides = function() {return numberOfSides;};
  }

  roll() {
    return dice.getRandomInt(this.getNumberOfSides());
  }

  static getRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }
}
