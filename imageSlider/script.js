let currentSlide = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll(".slider img");
  const totalSlides = slides.length;

/* Logic
currentSlide + step: Moves the index forward or backward.
+ totalSlides: Ensures the number is positive (handles negative values).
% totalSlides: Loops back to 0 when it reaches the last slide and loops to the last slide when moving backward from 0.
*/

currentSlide = (currentSlide + step + totalSlides) % totalSlides; //Looping effect

const slider = document.querySelector(".slider");
slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}
