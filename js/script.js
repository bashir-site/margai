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
const sections = document.querySelectorAll('.section-7-card');
const dots = document.querySelectorAll('.section-7 > :last-child a');
const container = document.querySelector('.section-7-card-content');

function updateActiveDot() {
  const scrollPosition = container.scrollLeft;
  let activeIndex = 0;

  // Har bir elementni tekshirib chiqing
  sections.forEach((section, index) => {
    if (
      section.offsetLeft <= scrollPosition + container.offsetWidth / 2 &&
      section.offsetLeft + section.offsetWidth >
        scrollPosition + container.offsetWidth / 2
    ) {
      activeIndex = index;
    }
  });

  // Barcha nuqtalarni tozalash
  dots.forEach((dot) => dot.classList.remove('bg-fone'));

  // To'g'ri nuqtani faollashtirish
  dots[activeIndex].classList.add('bg-fone');
}

// Skroll voqeasi bilan nuqtalarni yangilash
container.addEventListener('scroll', updateActiveDot);

// Nuqtalarni bosganingizda skrollni moslashtirish
dots.forEach((dot, index) => {
  dot.addEventListener('click', (e) => {
    e.preventDefault();
    container.scrollTo({
      left: sections[index].offsetLeft,
      behavior: 'smooth',
    });
    updateActiveDot(); // Nuqtani yangilash
  });
});

// Dastlabki nuqtani yangilash
updateActiveDot();

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

window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  const section1 = document.querySelector('.section-2');
  const section1Top = section1.getBoundingClientRect().top;

  if (section1Top <= 0) {
    header.classList.add('fixed-header');
  } else {
    header.classList.remove('fixed-header');
  }
});
