document.addEventListener('DOMContentLoaded', () => {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slides img');
  const prevButton = document.querySelector('.slider-button.prev');
  const nextButton = document.querySelector('.slider-button.next');
  const totalSlides = slides.length;
  const slidesToShow = 3;
  let currentIndex = 0;

  function updateSliderPosition() {
      const offset = currentIndex * (100 / slidesToShow);
      slider.style.transform = `translateX(-${offset}%)`;
  }

  prevButton.addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSliderPosition();
  });

  nextButton.addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSliderPosition();
  });


  updateSliderPosition();
});

window.onscroll = () => {
  const navbar = document.querySelector('.navbar');
  const y = window.scrollY

  if (y >600) {
      navbar.classList.add('navbar-fixed')
      
  } else if (y <600) {
      navbar.classList.remove('navbar-fixed')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('surveyForm');
  const modal = document.getElementById('modal');
  const closeModal = document.querySelector('.close');

  form.addEventListener('submit', function(event) {
      event.preventDefault();
      modal.style.display = 'block';
  });

  closeModal.addEventListener('click', function() {
      modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
      if (event.target === modal) {
          modal.style.display = 'none';
      }
  });
});
