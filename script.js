const navbarToggle = document.getElementById("navbar-toggle");
const hamburgerIcon = document.getElementById("hamburger-icon");

hamburgerIcon.addEventListener("click", function () {
  navbarToggle.classList.toggle("show");
});

window.addEventListener("click", function (event) {
  if (
    !navbarToggle.contains(event.target) &&
    !hamburgerIcon.contains(event.target) &&
    navbarToggle.classList.contains("show")
  ) {
    navbarToggle.classList.remove("show");
  }
});
