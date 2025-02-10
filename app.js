const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button.next');
const prevButton = document.querySelector('.carousel-button.prev');
let currentSlideIndex = 0;

const moveToSlide = (index) => {
  track.style.transform = `translateX(-${slides[index].offsetLeft}px)`;
};

nextButton.addEventListener('click', () => {
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  moveToSlide(currentSlideIndex);
});

prevButton.addEventListener('click', () => {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  moveToSlide(currentSlideIndex);
});



particlesJS('particles-js', {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5
    },
    "size": {
      "value": 3
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 3
    }
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      }
    },
    "modes": {
      "repulse": {
        "distance": 100
      }
    }
  }
});


/* scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});