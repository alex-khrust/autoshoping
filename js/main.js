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
  $('.type li a').click(function(){
    $(".type li a").removeClass('active');
    $(this).addClass('active');
  });
//-------------------------------------------------------------------------
// Переключение между табами, добавление класса active и скрытие контента ----------
  $(".tab_content").hide();
  $(".tab_content:first").show();
  /* в режиме вкладок */
  $(".block__menu a").click(function () {
    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
    $(".block__menu a").removeClass("active");
    $(this).addClass("active");
  });
//-------------------------------------------------------------------------
//Добавление и удаление классов по ширене экрана  ----------
//   var windowWidth = $(window).width();
//   if (windowWidth < 1070) $("header").addClass("mob-menu");
//   else $("header").removeClass("mob-menu");
//
//   $(window).resize(function () {
//     var windowWidth = $(window).width();
//     if (windowWidth < 1070) $("header").addClass("mob-menu");
//     else $("header").removeClass("mob-menu");
//   });
//----------------------------------------------------------




// ==============================================================
});















