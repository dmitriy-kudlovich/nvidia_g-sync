const html = document.querySelector("html");
const buttonMobile = document.querySelector("#buttonMobile");
const navMobile = document.querySelector("#navMobile");
const ovelay = document.querySelector("#overlay");
const buttonStart = document.querySelector("#buttonStart");
const formBuy = document.querySelector("#formBuy");
const buttonClose = document.querySelector("#buttonClose");

buttonMobile.addEventListener("click", () => {
  navMobile.classList.toggle("nav--mobile--active");
  html.classList.toggle("overflow-hidden");
  ovelay.classList.toggle("overlay--active");
  buttonMobile.classList.toggle("button--mobile--active");
});

buttonStart.addEventListener("click", () => {
  formBuy.classList.toggle("form-buy--active");
  ovelay.classList.add("overlay--active", "z-index");
  html.classList.toggle("overflow-hidden");
});

buttonClose.addEventListener("click", () => {
  formBuy.classList.remove("form-buy--active");
  ovelay.classList.remove("overlay--active", "z-index");
  html.classList.remove("overflow-hidden");
});
