$("#buttonMobile").click(() => {
  $("#navMobile").toggleClass("nav--mobile--active");
  $("html").toggleClass("overflow-hidden");
  $("#overlay").toggleClass("overlay--active");
  $("#buttonMobile").toggleClass("button--mobile--active");
});

$("#buttonStart").click(() => {
  $("#formBuy").toggleClass("form-buy--active");
  $("#overlay").toggleClass("overlay--active z-index");
  $("html").toggleClass("overflow-hidden");
});

$("#buttonClose").click((event) => {
  event.preventDefault();
  $("#formBuy").removeClass("form-buy--active");
  $("#overlay").removeClass("overlay--active z-index");
  $("html").removeClass("overflow-hidden");
});
