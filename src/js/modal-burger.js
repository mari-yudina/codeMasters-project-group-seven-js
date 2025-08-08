
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    closeMobileMenu();
  });
});


const burgerBtn = document.querySelector(".burger-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const closeBtn = document.querySelector(".mobile-close-btn");

burgerBtn.addEventListener("click", () => {
  mobileMenu.classList.add("is-open");
  document.body.classList.add("no-scroll");
});

closeBtn.addEventListener("click", closeMobileMenu);

mobileMenu.addEventListener("click", e => {
  if (e.target === mobileMenu) closeMobileMenu();
});


document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeMobileMenu();
});


function closeMobileMenu() {
  mobileMenu.classList.remove("is-open");
  document.body.classList.remove("no-scroll");
}
