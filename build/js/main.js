svg4everybody();

$("#buttonMobile").click(function () {
  $("#navMobile").toggleClass("nav--mobile--active");
  $("html").toggleClass("overflow-hidden");
  $("#overlay").toggleClass("overlay--active");
  $("#buttonMobile").toggleClass("button--mobile--active");
});

$("#buttonStart").click(function () {
  $("#formBuy").toggleClass("form-buy--active");
  $("#overlay").toggleClass("overlay--active z-index");
  $("html").toggleClass("overflow-hidden");
});

$("#buttonClose").click(function (event) {
  event.preventDefault();
  $("#formBuy").removeClass("form-buy--active");
  $("#overlay").removeClass("overlay--active z-index");
  $("html").removeClass("overflow-hidden");
});
