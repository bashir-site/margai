function toggleHamburgerMenu() {
  const menu = document.getElementById('hamburgerMenu');
  menu.classList.toggle('open');
}


window.addEventListener('click', function(event) {
  const menu = document.getElementById('hamburgerMenu');
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  

  if (!menu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
    menu.classList.remove('open');
  }
});