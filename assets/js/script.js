// Test si l'élément existe
const btnMenu = document.getElementById("menu-toggle");
const body = document.body;

btnMenu.addEventListener("click", () => {
  body.classList.toggle("menu-open");
  if (body.classList.contains("menu-open")) {
    btnMenu.src = "./assets/images/icon-close.svg";
  } else {
    btnMenu.src = "./assets/images/icon-hamburger.svg";
  }
});

// Toggle des sous-menus
const menuSections = document.querySelectorAll(".menu-section");

menuSections.forEach((section) => {
  const menuTitle = section.querySelector(".menu-title");
  if (menuTitle) {
    menuTitle.addEventListener("click", () => {
      section.classList.toggle("active");
    });
  }
});
