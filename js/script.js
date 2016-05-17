var link = document.querySelector(".form-btn");
var popup = document.querySelector(".form");

link.addEventListener("click", function (event) {
  event.preventDefault();
  popup.classList.toggle("form-show");
});