const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const body = document.body;
const y = window.scrollY;
btnHamburger.addEventListener('click', function () {
  header.classList.toggle('open');
  body.classList.toggle('no-scroll');
});

document.addEventListener('scroll', function (e) {
  if (window.innerWidth < 768) {
    if (window.scrollY > 120) {
      header.classList.add('sticky');
    }
    if (window.scrollY < 10) {
      header.classList.remove('sticky');
    }
  }
});
