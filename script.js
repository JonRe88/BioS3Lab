window.addEventListener("scroll", function () {
  var scrolled = window.pageYOffset;
  var parallax = document.querySelector(".parallax-bg");
  parallax.style.transform = "translateY(" + scrolled * 0.5 + "px)";
});
