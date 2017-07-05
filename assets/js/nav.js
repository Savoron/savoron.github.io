var menuOpen = false;

document.getElementById('nav_btn').addEventListener('click', (event) => {
  let logo = document.getElementById('logo');
  let menu = document.getElementById('menu');

  menuOpen = !menuOpen;

  if (menuOpen) {
    logo.style.opacity  = 0;
    logo.style.flex     = 0;
    logo.style.zIndex   = -100;

    menu.style.opacity  = 1;
    menu.style.flex     = 1;
    menu.style.zIndex   = 1;
  }
  else {
    logo.style.opacity  = 1;
    logo.style.flex     = 1;
    logo.style.zIndex   = 1;

    menu.style.opacity  = 0;
    menu.style.flex     = 0;
    menu.style.zIndex   = -100;
  }
});
