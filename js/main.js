$("a").click(
  function () {
    $(".hamburger-menu").fadeIn('slow');
  }
)

var hide = $('.close');

hide.click(
  function () {
      $(".hamburger-menu").hide('fast');
  }
)
