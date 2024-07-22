/* Responsive Navigation */

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menu.classList.add("show");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menu.classList.remove("show");
    menuOpen = false;
  }
});

/* Smooth Scrolling */

const links = document.querySelectorAll("header nav ul li a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}
