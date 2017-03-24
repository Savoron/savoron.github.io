"use strict";
class Player extends Humanoid{
  constructor(_Game) {
    super(_Game);
  }

  levelUp() {
    this.level++;
    this.health = this.maxHealth += _Game.RequestRandomDiceRoll();
  }
}
