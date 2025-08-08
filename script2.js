const slides = document.querySelectorAll('.slide');
let currentIndex = 0;
const totalSlides = slides.length;
let intervalId = null;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

function restartInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(nextSlide, 5000);
}

const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');

if (btnNext && btnPrev) {
  btnNext.addEventListener('click', () => {
    nextSlide();
    restartInterval();
  });

  btnPrev.addEventListener('click', () => {
    prevSlide();
    restartInterval();
  });
}

showSlide(currentIndex);
intervalId = setInterval(nextSlide, 5000);

