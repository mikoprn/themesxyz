// Header Scrolled
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Active Current Page
document.querySelectorAll(".nav__link").forEach((link) => {
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
  }
});

// Mobile Navigation
const menuBtn = document.querySelector(".nav__mobile-btn");
const navMenu = document.querySelector(".nav__menu");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

navMenu.addEventListener("click", () => {
  navMenu.classList.remove("active");
});

document.addEventListener("click", (e) => {
  if (!menuBtn.contains(e.target) && !navMenu.contains(e.target)) {
    menuBtn.classList.remove("active");
    navMenu.classList.remove("active");
  }
});
