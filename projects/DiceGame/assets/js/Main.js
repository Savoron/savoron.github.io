function Main() {
  var game = new Game();

	//Main Menu Buttons//
  //Button (Start Game) -> Call displayCharacterSelect -> Call displayMainMenu -> requestGameStart

	//Action Menu Buttons//
  //Button (Attack) -> Player Attack AI
  //Button (Run Away) -> Attempt Roll -> Run Away || Nothing
  //Button (Search) -> Attempt Roll -> Find Item || Nothing
  //Button (Move On) -> Attempt Roll -> Find Enemy || Nothing


  ;(function () {
    function main() {
      window.requestAnimationFrame( main );
      game.Update();
    }

    main();
  })();
}

Main();
