"use strict";
class Game {
  constructor() {
    this.ai                = null;
    this.player            = null;
    this.playerLook        = null;
    this.possibleSidedDice = [4,6,8,10,12,20];
  }

  displayMainMenu() {

  }
  displayCharacterSelect() {
    this.playerLook;
  }

  requestAttemptRoll() {
  	var indexOfNewRadomDice = new dice(possibleSidedDice.length).roll()-1;
  	var randomDice = new dice(possibleSidedDice[indexOfNewRadomDice]).roll();
  	return randomDice;
  }
  reuestAttackTurn() {
    // Player Attacks -> AI.takesDamage()
    // If AI Lives
      // AI Attacks -> Player.takesDamge()
    // Else
      //

  }
}

function main() {
  var game = new Game();

	//Main Menu Buttons//
  //Button (Start Game) -> Character Select -> Start Game

	//Action Menu Buttons//
  //Button (Attack) -> Player Attack AI
  //Button (Run Away) -> Attempt Roll -> Run Away || Nothing
  //Button (Search) -> Attempt Roll -> Find Item || Nothing
  //Button (Move On) -> Attempt Roll -> Find Enemy || Nothing
}
