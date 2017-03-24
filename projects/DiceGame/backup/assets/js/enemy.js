"use strict";
class enemy extends creature{
  constructor() {
    super();
    this.type = "enemy";
    console.log(this.type + " | " + this.health);
  }
}
