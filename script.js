console.log("hello ");

const btnNavEl = document.querySelector("#nav-icon-mobile");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.add("nav-open");
});
