/*======= HEDRE BLUR ========*/

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

});






