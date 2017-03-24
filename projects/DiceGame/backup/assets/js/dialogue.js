"use strict";
function requestDialogue(type, player) {
  var nothingDialogue     =   ["You found nothing...",
                               "What's that!? Is it a bird? Is it a plane? Wait what's a plane?",
                               "Achoo!!!",
                               "Go search for something! Oh wait I won't let you since your weapon still has durability. Good lucky HAHAHA!!!",
                               "You: Herp derp blerp serp perp. Yupp I'm weird",
                               "You: Wonder what's out here.",
                               "You: That cloud looks like... a cloud?"
                              ];
  var enemyDialogue       =   ["Enemy: Haha I will destroy you!",
                               "Enemy: You will never live!"
                              ];
  var killedEnemyDialogue =   ["You: Well it's dead. Now what?",
                               "Aren't you just a tough guy."
                              ];
  var weaponBreakDialogue =   ["Well crap. Looks like your weapon broke. You better run!",
                               "You: Huh. Looks like that " + player.getWeaponType() + " didn't last long",
                              ];
  var foundWeaponDialogue =   ["WOW! You found a " + player.getWeaponType() + "<br>It has " + player.getWeaponDurability() + " durability and " + player.getWeaponBaseDamage() + " base damage."
                              ];
  var foundNothingDialogue =  ["You: Well crap. Nothing here to see.",
                               "You: Huh that looks like an apple. Wonder if I should eat it."
                              ];
  var runAwayDialogue      =  ["Well aren't you lucky. You got away. You better go find a new weapon",
                               "Aww did someone get scared?"
                              ];
  var failedRunAwayDialogue = ["Ouch, that looked like it hurt. Better watch out!",
                               "WATCH OUT FOR HIS SWING!"
                              ];
  var enemygotaway          = ["You: Crap, it got away.",
                               "You: Huh? Did it just run away?"
                              ];
  var enemytriedtorun       = ["*enemy attempts to run away but trips on the ground* <br>You: Oh no you don't!",
                               "*enemy attempts to run away"
                              ];
  var durability            = ["Your weapon has durability, why ya searching",
                               "I don't know about you, but that weapon of yours looks fine to me"
                              ];
  var randomNumber;
  var output = document.getElementById("output");

  if (type == "nothing") {
    randomNumber = new dice(nothingDialogue.length).roll() - 1;
    output.innerHTML = nothingDialogue[randomNumber];
  } else if (type == "enemy") {
    randomNumber = new dice(enemyDialogue.length).roll() - 1;
    output.innerHTML = enemyDialogue[randomNumber];
  } else if (type == "killedenemy") {
    randomNumber = new dice(killedEnemyDialogue.length).roll() - 1;
    output.innerHTML = killedEnemyDialogue[randomNumber] + "<br>" + requestStats(player);
  } else if (type == "weaponbreak") {
    randomNumber = new dice(weaponBreakDialogue.length).roll() - 1;
    output.innerHTML = weaponBreakDialogue[randomNumber];
  } else if (type == "foundweapon") {
    randomNumber = new dice(foundWeaponDialogue.length).roll() - 1;
    output.innerHTML = foundWeaponDialogue[randomNumber];
  } else if (type == "foundnothing") {
    randomNumber = new dice(foundNothingDialogue.length).roll() - 1;
    output.innerHTML = foundNothingDialogue[randomNumber];
  } else if (type == "runaway") {
    randomNumber = new dice(runAwayDialogue.length).roll() - 1;
    output.innerHTML = runAwayDialogue[randomNumber];
  } else if (type == "failedrunaway") {
    randomNumber = new dice(failedRunAwayDialogue.length).roll() - 1;
    output.innerHTML = failedRunAwayDialogue[randomNumber];
  } else if (type == "enemygotaway") {
    randomNumber = new dice(enemygotaway.length).roll() - 1;
    output.innerHTML = enemygotaway[randomNumber];
  } else if (type == "enemytriedtorun") {
    randomNumber = new dice(enemytriedtorun.length).roll() - 1;
    output.innerHTML = enemytriedtorun[randomNumber];
  } else if (type == "durability") {
    randomNumber = new dice(durability.length).roll() - 1;
    output.innerHTML = durability[randomNumber];
  }
}
