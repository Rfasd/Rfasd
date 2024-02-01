$(document).on("click", ".header-menu li", function (event) {
  event.preventDefault();

  var seletor = $(this).children("a");
  $("html, body").animate(
    {
      scrollTop: $(seletor.attr("href")).offset().top,
    },
    1000
  );
});
