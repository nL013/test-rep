// Слайдер
const videos = document.querySelectorAll(".video-container video");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const counter = document.querySelector(".slider-counter");
let currentIndex = 0;

function showVideo(index) {
  videos.forEach((video, i) => {
    video.classList.toggle("active", i === index);
    if (i === index) {
      video.play();
    } else {
      video.pause();
      video.currentTime = 0;
    }
  });
  updateCounter();
}

// Функция для обновления счетчика
function updateCounter() {
  counter.textContent = `${currentIndex + 1}/${videos.length}`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % videos.length;
  showVideo(currentIndex);
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + videos.length) % videos.length;
  showVideo(currentIndex);
});

showVideo(currentIndex);

// слайдер для фото
const sliderWrapper = document.querySelector('.slider-wrapper');
const sliderItems = document.querySelectorAll('.slider-item');
let slideIndex = 0;

function moveSlider() {
  // Увеличиваем индекс слайда
  slideIndex++;

  // Если индекс достиг длины, сбрасываем его
  if (slideIndex >= sliderItems.length / 2) {
    slideIndex = 0;
    // Сразу прокручиваем к первому элементу
    // sliderWrapper.style.transition = 'none';
    // sliderWrapper.style.transform = 'translateX(0)';
    
    // Позволяем браузеру перерисовать элемент
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        sliderWrapper.style.transition = 'transform 0.5s ease-in-out';
        slideIndex++;
        updateSlider();
      });
    });
  } else {
    updateSlider();
  }
}

function updateSlider() {
  // Прокручиваем слайдер на основании индекса
  sliderWrapper.style.transform = `translateX(-${slideIndex * (300 + 16)}px)`; // 300 - ширина элемента, 16 - отступ
}

// Запускаем автоматическую прокрутку каждые 3 секунды
setInterval(moveSlider, 1500);
