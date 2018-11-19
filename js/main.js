$(document).ready(function ()  {
// =======================================================================
// Hamburger -----------------------------------------
//   (function () {
//     $('#search-hamburger').on('click', function() {
//       $('#search-hamburger>.bar').toggleClass('animate');
//       $('.hamburger-menu').toggleClass('down');
//     });
//     $('.hamburger-menu a').on('click', function() {
//       $('#search-hamburger>.bar').toggleClass('animate');
//       $('.hamburger-menu').toggleClass('down');
//     })
//   })();
  
  // Добавление класса active пунктам меню --------------------------------
  $('.block__menu a').click(function(){
    $(".block__menu a").removeClass('active');
    $(this).addClass('active');
  });
  $('.type li a').click(function(){
    $(".type li a").removeClass('active');
    $(this).addClass('active');
  });
//-------------------------------------------------------------------------
//Добавление и удаление классов по ширене экрана  ----------
  var windowWidth = $(window).width();
  if (windowWidth < 1070) $("header").addClass("mob-menu");
  else $("header").removeClass("mob-menu");
  
  $(window).resize(function () {
    var windowWidth = $(window).width();
    if (windowWidth < 1070) $("header").addClass("mob-menu");
    else $("header").removeClass("mob-menu");
  });
//----------------------------------------------------------
// Animated Counter Bootstrap ------------------------------
  $('.num').each(function () {
    $(this).prop('Counter',0).animate({
      Counter: $(this).text()
    }, {
      duration: 5000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });

//----------------------------------------------------------




// ==============================================================
});















