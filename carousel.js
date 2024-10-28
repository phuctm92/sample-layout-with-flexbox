// Before

// let currentItem = 0;
// const carouselItems = document.getElementsByClassName("carousel-item");
// const dots = document.getElementsByClassName("dot");

// function next() {
//   currentItem += 1;
//   if (currentItem == carouselItems.length) {
//     currentItem = 0;
//   }
//   showSlide(currentItem);
// }
// function prev() {
//   currentItem -= 1;
//   if (currentItem < 0) {
//     currentItem = carouselItems.length - 1;
//   }
//   showSlide(currentItem);
// }
// function currentCarouselItem(index) {
//   currentItem = index;
//   showSlide(currentItem);
// }

// function showSlide(currentItem) {
//   for (let item of carouselItems) {
//     item.style.display = "none";
//   }
//   for (let dot of dots) {
//     dot.classList.remove("active");
//   }
//   carouselItems[currentItem].style.display = "block";
//   dots[currentItem].classList.add("active");
// }

// After

let currentItem = 0;
const carouselItems = document.getElementsByClassName("carousel-item");
const dots = document.getElementsByClassName("dot");

function next() {
  updateSlide((currentItem + 1) % carouselItems.length);
}

// Note: Used % carouselItems.length in next and prev to handle wrap-around logic
// (moving from the last to the first item and vice versa).
// keyword: Modular Arithmetic for Cyclic Operations

function prev() {
  updateSlide((currentItem - 1 + carouselItems.length) % carouselItems.length);
}

function currentCarouselItem(index) {
  updateSlide(index);
}

function updateSlide(index) {
  carouselItems[currentItem].style.display = "none";
  dots[currentItem].classList.remove("active");

  currentItem = index;

  carouselItems[currentItem].style.display = "block";
  dots[currentItem].classList.add("active");
}

// Initialize by showing the first slide
updateSlide(currentItem);
