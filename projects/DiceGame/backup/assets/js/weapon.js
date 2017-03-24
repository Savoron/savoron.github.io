"use strict";
class weapon {
  constructor() {
    this.baseDamage = requestRoll();
    this.durability = requestRoll();
    this.type = weapon.getWeapon();
    console.log(this.type + " | " + this.baseDamage + " | " + this.durability);
  }

  weaponTakeDamage() {
    this.durability--;
  }

  getDurability() {
    return this.durability;
  }
  getBaseDamage() {
    return this.baseDamage;
  }
  getType() {
    return this.type;
  }

  static getWeapon() {
    var listOfWeapons = ["Isaac Newton's Apple",
                         "A Clown Fish With A Small Right Fin",
                         "Coffe Mug",
                         "Rubber Duck Debugger",
                         "Talking Potato Battery",
                         "Schwartz Ring",
                         "A Pineapple Apple Pen",
                         "Bottle Of Skooma",
                         "Andrew's Reading Glasses",
                         "Benjamin Franklin's Kite",
                         "Ferb's Aglet",
                         "Fargoth's Ring"];
    var randomNumber = new dice(listOfWeapons.length).roll()-1;
    return listOfWeapons[randomNumber];
  }
}
