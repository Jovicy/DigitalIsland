const MIN_LOADER_TIME = 2500; // 30 seconds in milliseconds
const loader = document.getElementById("loader");
const startTime = Date.now();

window.addEventListener("load", () => {
  const elapsed = Date.now() - startTime;
  const remaining = MIN_LOADER_TIME - elapsed;

  if (remaining > 0) {
    // Wait remaining time, then hide loader
    setTimeout(() => {
      loader.style.display = "none";
    }, remaining);
  } else {
    // Already passed 30 seconds, hide immediately
    loader.style.display = "none";
  }
});

// Navigation
document.getElementById("nav-toggle").addEventListener("click", function () {
  document.getElementById("nav-list").classList.toggle("active");
});

// Acoordion
const faqCards = document.querySelectorAll(".faq-card");

faqCards.forEach((card) => {
  const question = card.querySelector(".faq-question");
  question.addEventListener("click", () => {
    card.classList.toggle("active");

    // Optionally close others
    faqCards.forEach((otherCard) => {
      if (otherCard !== card) {
        otherCard.classList.remove("active");
      }
    });
  });
});
