
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }

    if (mobileMenu.classList.contains("is-open")) {
      closeMobileMenu();
    }
  });
});

const burgerBtn = document.querySelector(".burger-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".mobile-close-btn");

function handleEscape(e) {
  if (e.key === "Escape") {
    closeMobileMenu();
  }
}

burgerBtn.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
  document.body.classList.add("no-scroll");
  document.addEventListener("keydown", handleEscape); // додаємо тільки при відкритті
});

closeBtn.addEventListener("click", closeMobileMenu);

mobileMenu.addEventListener("click", e => {
  if (e.target === mobileMenu) closeMobileMenu();
});

function closeMobileMenu() {
  mobileMenu.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
  document.removeEventListener("keydown", handleEscape); // знімаємо при закритті
}
