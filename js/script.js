function toggleHamburgerMenu() {
  const menu = document.getElementById('hamburgerMenu');
  menu.classList.toggle('open');
}

window.addEventListener('click', function (event) {
  const menu = document.getElementById('hamburgerMenu');
  const hamburgerBtn = document.querySelector('.hamburger-btn');

  if (!menu.contains(event.target) && !hamburgerBtn.contains(event.target)) {
    menu.classList.remove('open');
  }
});
document.querySelectorAll('.section-7 > :last-child a').forEach((item) => {
  document.querySelector('.section-7 > :last-child a').classList.add('bg-fone');
  item.addEventListener('click', () => {
    document.querySelectorAll('.section-7 > :last-child a').forEach((item) => {
      item.classList.remove('bg-fone');
    });
    item.classList.add('bg-fone');
  });
});
document.querySelectorAll('.hamburger-div ul a').forEach((item) =>
  item.addEventListener('click', () => {
    document.getElementById('hamburgerMenu').classList.remove('open');
  })
);

// ///////////////////
document.querySelectorAll('.element2')[0].addEventListener('click', () => {
  if (
    document.querySelectorAll('.element')[0].classList.contains('show-element')
  ) {
    document.querySelectorAll('.element')[0].classList.remove('show-element');
    document.querySelectorAll('.element')[0].classList.add('hide-element');
    document.querySelectorAll('.element2')[0].textContent = '+';
  } else if (
    document.querySelectorAll('.element')[0].classList.contains('hide-element')
  ) {
    document.querySelectorAll('.element2')[0].textContent = '-';
    document.querySelectorAll('.element2')[1].textContent = '+';
    document.querySelectorAll('.element2')[2].textContent = '+';
    document.querySelectorAll('.element2')[3].textContent = '+';
    document.querySelectorAll('.element')[0].classList.add('show-element');
    document.querySelectorAll('.element')[0].classList.remove('hide-element');
    document.querySelectorAll('.element')[1].classList.add('hide-element');
    document.querySelectorAll('.element')[1].classList.remove('show-element');
    document.querySelectorAll('.element')[2].classList.add('hide-element');
    document.querySelectorAll('.element')[2].classList.remove('show-element');
    document.querySelectorAll('.element')[3].classList.add('hide-element');
    document.querySelectorAll('.element')[3].classList.remove('show-element');
  }
});

document.querySelectorAll('.element2')[1].addEventListener('click', () => {
  if (
    document.querySelectorAll('.element')[1].classList.contains('show-element')
  ) {
    document.querySelectorAll('.element2')[1].textContent = '+';

    document.querySelectorAll('.element')[1].classList.remove('show-element');
    document.querySelectorAll('.element')[1].classList.add('hide-element');
  } else if (
    document.querySelectorAll('.element')[1].classList.contains('hide-element')
  ) {
    document.querySelectorAll('.element2')[1].textContent = '-';
    document.querySelectorAll('.element2')[0].textContent = '+';
    document.querySelectorAll('.element2')[2].textContent = '+';
    document.querySelectorAll('.element2')[3].textContent = '+';
    document.querySelectorAll('.element')[0].classList.remove('show-element');
    document.querySelectorAll('.element')[0].classList.add('hide-element');
    document.querySelectorAll('.element')[1].classList.add('show-element');
    document.querySelectorAll('.element')[1].classList.remove('hide-element');
    document.querySelectorAll('.element')[2].classList.add('hide-element');
    document.querySelectorAll('.element')[2].classList.remove('show-element');
    document.querySelectorAll('.element')[3].classList.add('hide-element');
    document.querySelectorAll('.element')[3].classList.remove('show-element');
  }
});

document.querySelectorAll('.element2')[2].addEventListener('click', () => {
  if (
    document.querySelectorAll('.element')[2].classList.contains('show-element')
  ) {
    document.querySelectorAll('.element2')[2].textContent = '+';

    document.querySelectorAll('.element')[2].classList.remove('show-element');
    document.querySelectorAll('.element')[2].classList.add('hide-element');
  } else if (
    document.querySelectorAll('.element')[2].classList.contains('hide-element')
  ) {
    document.querySelectorAll('.element2')[2].textContent = '-';
    document.querySelectorAll('.element2')[1].textContent = '+';
    document.querySelectorAll('.element2')[0].textContent = '+';
    document.querySelectorAll('.element2')[3].textContent = '+';
    document.querySelectorAll('.element')[0].classList.remove('show-element');
    document.querySelectorAll('.element')[0].classList.add('hide-element');
    document.querySelectorAll('.element')[1].classList.remove('show-element');
    document.querySelectorAll('.element')[1].classList.add('hide-element');
    document.querySelectorAll('.element')[2].classList.remove('hide-element');
    document.querySelectorAll('.element')[2].classList.add('show-element');
    document.querySelectorAll('.element')[3].classList.add('hide-element');
    document.querySelectorAll('.element')[3].classList.remove('show-element');
  }
});

document.querySelectorAll('.element2')[3].addEventListener('click', () => {
  if (
    document.querySelectorAll('.element')[3].classList.contains('show-element')
  ) {
    document.querySelectorAll('.element2')[3].textContent = '+';

    document.querySelectorAll('.element')[3].classList.remove('show-element');
    document.querySelectorAll('.element')[3].classList.add('hide-element');
  } else if (
    document.querySelectorAll('.element')[3].classList.contains('hide-element')
  ) {
    document.querySelectorAll('.element2')[3].textContent = '-';
    document.querySelectorAll('.element2')[1].textContent = '+';
    document.querySelectorAll('.element2')[2].textContent = '+';
    document.querySelectorAll('.element2')[0].textContent = '+';
    document.querySelectorAll('.element')[0].classList.remove('show-element');
    document.querySelectorAll('.element')[0].classList.add('hide-element');
    document.querySelectorAll('.element')[1].classList.remove('show-element');
    document.querySelectorAll('.element')[1].classList.add('hide-element');
    document.querySelectorAll('.element')[2].classList.add('hide-element');
    document.querySelectorAll('.element')[2].classList.remove('show-element');
    document.querySelectorAll('.element')[3].classList.remove('hide-element');
    document.querySelectorAll('.element')[3].classList.add('show-element');
  }
});

window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  const section1 = document.querySelector(".section-2");
  const section1Top = section1.getBoundingClientRect().top;

  if (section1Top <= 0) {
    header.classList.add("fixed-header");
  } else {
    header.classList.remove("fixed-header");
  }
});