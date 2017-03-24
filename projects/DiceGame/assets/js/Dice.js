"use strict";
class Dice {
  constructor(NumberOfSides) {
    this.GetNumberOfSides = function() {return NumberOfSides;};
  }

  Roll() {
    return Dice.GetRandomInt(this.GetNumberOfSides());
  }

  static GetRandomInt(max) {
    return Math.floor(Math.random() * max) + 1;
  }
}
