// Version a0.0.1

window.onload = function() {
  console.log("Hello World!");
  loadScreen();
}

function loadScreen() {
  changeArrowOpacity();
}

async function changeArrowOpacity() {
  var arrows = document.getElementById("arrows");
  for (var i = 0; i < arrows.children.length; i++) {
    arrows.children[i].style.opacity = 1;
    await sleep(1000);
  }
  arrows.style.opacity = 0;
  document.getElementById("menu").style.opacity = 1;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
