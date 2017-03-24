"use strict";
class player extends creature{
  constructor() {
    super();
    this.type = "player";
    console.log(this.type + " | " + this.health);
  }

  levelUp() {
    this.level++;
    this.health = this.maxHealth += requestRoll();
  }
}
