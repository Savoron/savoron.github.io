"use strict";
class Humanoid {
  constructor(_Game) {
    this.Health = _Game.RequestRandomDiceRoll() * 10;
    this.MaxHealth = this.Health;
    this.DamageMultiplier = 10;
    this.Level = 1;
    this.Defense = _Game.RequestRandomDiceRoll();
    this.Div = null;
    this.Attacking = false;
    let Weapon = _Game.RequestRandomWeapon();
    this.GetWeapon = function(){return Weapon};
  }

  GetBaseDamage() {
    return Weapon.BaseDamage;
  }

  TakeDamage(amount) {
    this.Health -= amount;
  }

  UsedWeapon() {
    Weapon.DamageWeapon();
  }

  LevelUp() {

  }
}
