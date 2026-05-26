const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const languageBtn = document.getElementById("languageBtn");

let currentLanguage = "en";

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  const links = document.querySelectorAll(".nav-links a");

  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
    });
  });
}

/* Reveal animation on scroll */
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => {
  observer.observe(element);
});

/* Language Switch */
function switchLanguage() {
  currentLanguage = currentLanguage === "en" ? "ar" : "en";

  const translatableElements = document.querySelectorAll("[data-en][data-ar]");

  translatableElements.forEach((element) => {
    element.textContent = element.getAttribute(`data-${currentLanguage}`);
  });

  if (currentLanguage === "ar") {
    document.body.classList.add("arabic");
    document.documentElement.lang = "ar";
    languageBtn.textContent = "English";
  } else {
    document.body.classList.remove("arabic");
    document.documentElement.lang = "en";
    languageBtn.textContent = "عربي";
  }

  navLinks.classList.remove("active");
}

if (languageBtn) {
  languageBtn.addEventListener("click", switchLanguage);
}