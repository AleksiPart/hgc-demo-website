document.querySelectorAll(".faq-question").forEach(function (button) {
  button.addEventListener("click", function () {
    button.parentElement.classList.toggle("active");
  });
});

const revealElements = document.querySelectorAll("[data-reveal]");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      } else {
        entry.target.classList.remove("is-visible");
      }
    });
  },
  { threshold: 0.15 }
);
revealElements.forEach((el) => revealObserver.observe(el));

window.addEventListener("DOMContentLoaded", () => {
  const loadElements = document.querySelectorAll("[data-load-reveal]");
  loadElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("is-visible");
    }, 150 * index);
  });
});