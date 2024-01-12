const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const main = document.querySelector(".main");
burger.addEventListener("click", () => {
  burger.classList.toggle("open");
  //   menu.classList.toggle("open");
  main.classList.toggle("open");
});
