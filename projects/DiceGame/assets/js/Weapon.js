"use strict"
class Weapon {
  constructor(_Game) {
    this.BaseDamage = 1;
    this.Durability = 1;
    this.Type = _Game.Enum.WeaponType.Potato;

    this.GetWeaponTypes = function() {
      return Object.keys(_Game.Enum.WeaponType);
    }
  }

  DamageWeapon() {
    this.Durability--;
  }

  RepairWeapon(){
    this.Durability++;
  }
}
