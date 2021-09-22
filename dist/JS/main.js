const menuBtn = document.querySelector(".menu-btn");
const hamburger = document.querySelector(".menu-btn__burger");

const nav = document.querySelector(".nav");
const navGrid = document.querySelector(".navgrid");

const navHome = document.querySelector(".navgrid__home");
const navAbout = document.querySelector(".navgrid__about");
const navProjects = document.querySelector(".navgrid__projects");
const navContact = document.querySelector(".navgrid__contact");

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    hamburger.classList.add("open");
    nav.classList.add("open");
    navGrid.classList.add("open");
    navHome.classList.add("open");
    navAbout.classList.add("open");
    navProjects.classList.add("open");
    navContact.classList.add("open");

    showMenu = true;
  } else {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    navGrid.classList.remove("open");
    navHome.classList.remove("open");
    navAbout.classList.remove("open");
    navProjects.classList.remove("open");
    navContact.classList.remove("open");

    showMenu = false;
  }
}
