// слайдер для видео
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

