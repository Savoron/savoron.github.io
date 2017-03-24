"use strict";
class creature {
  constructor() {
    this.healthMultiplier = 10;
    this.health = this.maxHealth = requestRoll() * this.healthMultiplier;
    this.level = 1;
    this.weapon = requestWeapon();
    this.type = "creature";
  }

  calculateDamageAmount() {
    var damageMultiplier = requestRoll();
    var damageDelt = this.getWeaponBaseDamage() * damageMultiplier;

    if (this.getWeaponDurability() == 0) {
      damageDelt = -1;
    } else {
      this.weapon.weaponTakeDamage();
    }

    return damageDelt;
  }

  generateNewWeapon() {
    this.weapon = requestWeapon();
  }

  getWeaponType() {
    return this.weapon.getType();
  }
  getWeaponBaseDamage() {
    return this.weapon.getBaseDamage();
  }
  getWeaponDurability() {
    return this.weapon.getDurability();
  }
  getHealth() {
    return this.health;
  }
  getLevel() {
    return this.level;
  }
  getCreatureType() {
    return this.type;
  }

  takeDamage(damageAmount) {
    this.health -= damageAmount;
    console.log(this.health + "/" + this.maxHealth);
  }
}
