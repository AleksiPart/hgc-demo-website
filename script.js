document.querySelectorAll(".faq-question").forEach(function (button) {
  button.addEventListener("click", function () {
    button.parentElement.classList.toggle("active");
  });
});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

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

const heroVideo = document.querySelector(".hero-media .hero-image");
if (heroVideo) {
  const isDesktop = window.matchMedia("(min-width: 981px)").matches;

  if (isDesktop) {
    heroVideo.pause();
    let duration = 0;
    heroVideo.addEventListener("loadedmetadata", () => {
      duration = heroVideo.duration;
    });

    let ticking = false;
    function updateScrub() {
      const heroSection = document.querySelector(".hero");
      const heroHeight = heroSection.offsetHeight;
      const progress = Math.min(Math.max(window.scrollY / heroHeight, 0), 1);
      if (duration > 0) {
        heroVideo.currentTime = progress * duration;
      }
      ticking = false;
    }
    window.addEventListener("scroll", () => {
      if (!ticking) {
        requestAnimationFrame(updateScrub);
        ticking = true;
      }
    });
  } else {
    heroVideo.setAttribute("autoplay", "");
    heroVideo.setAttribute("loop", "");
    heroVideo.play().catch(() => {});
  }
}