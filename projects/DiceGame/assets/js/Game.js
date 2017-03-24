"use strict";
class Game {
  constructor() {
    this.Running            = false;
    this._Enemy             = null;
    this._Player            = null;
    this.PossibleSidedDice  = [4,6,8,10,12,20];
    this.Enum               = new Enum();
    this.Level              = 0;
    this.count = 0;
  }

  DisplayMainMenu() {

  }
  DisplayCharacterSelect() {

  }
  DisplayDamageCounter(type) {

  }

  SpawnPlayer() {
    var player = new Player(this);

    return player;
  }
  SpawnEnemy() {
    return new Enemy(this);
  }

  RequestRandomDiceRoll() {
  	var IndexOfNewRadomDice = new Dice(this.PossibleSidedDice.length).Roll()-1;
  	var RandomDice = new Dice(this.PossibleSidedDice[IndexOfNewRadomDice]).Roll();
  	return RandomDice;
  }
  RequestAttackAnimation(Humanoid) {

  }
  ReuestAttackTurn() {
    var PlayerBaseDamage = this._Player.GetBaseDamage();
    var PlayerDamageMultiplier = RequestRandomDiceRoll();
    var PlayerAttackChance = RequestRandomDiceRoll();

    if (this._Player.GetWeapon().Durability == 0) {
      // Output can't attack
    } else if (PlayerAttackChance > this._Enemy.Defense) {
      this._Player.Attacking = true;
      this._Enemy.DealDamage(PlayerBaseDamage * PlayerDamageMultiplier);
      DisplayDamageCounter("enemy", PlayerBaseDamage * PlayerDamageMultiplier);
    }

    var EnemyBaseDamage = this._Enemy.GetBaseDamage();
    var EnemyDamageMultiplier = RequestRandomDiceRoll();
    var EnemyAttackChance = RequestRandomDiceRoll();

    if (this._Enemy.GetWeapon().Durability == 0) {
      // Output can't attack
    } else if (EnemyAttackChance > this._Player.Defense) {
      this.Enemy.Attacking = true;
      this._Player.DealDamage(EnemyBaseDamage * EnemyDamageMultiplier);
      DisplayDamageCounter("player", EnemyBaseDamage * EnemyDamageMultiplier);
    }
  }
  RequestGameStart() {
    this._Player = this.SpawnPlayer();
    this.Running = true;
  }
  RequestWeapon(type, baseDamage, durability) {
    var weapon = new Weapon(this);
    weapon.BaseDamage = baseDamage;
    weapon.Durability = durability;
    weapon.Type = type;
    return weapon;
  }
  RequestRandomWeapon() {
    var weapon = new Weapon(this);
    var numberOfWeaponTypes = weapon.GetWeaponTypes().length;
    var randomNumber = new Dice(numberOfWeaponTypes).Roll();

    weapon.BaseDamage = this.RequestRandomDiceRoll();
    weapon.Durability = this.RequestRandomDiceRoll();
    weapon.Type       = this.Enum.WeaponType[weapon.GetWeaponTypes()[randomNumber]];

    return weapon;
  }

  //Animation Frame Update Function
  Update() {
    if (this.Running) {
      if (this._Player.Attacking) {
        RequestAttackAnimation(this._Player);
      }
    }
  }
}
