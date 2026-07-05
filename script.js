document.querySelectorAll(".faq-question").forEach(function (button) {
  button.addEventListener("click", function () {
    button.parentElement.classList.toggle("active");
  });
});
