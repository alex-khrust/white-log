$(document).ready(function ()  {
// =======================================================================
// Hamburger -----------------------------------------
//   (function () {
//     $('.hamburger-menu a').on('click', function() {
//       $('#search-hamburger>.bar').toggleClass('animate');
//       $('.hamburger-menu').toggleClass('down');
//     })
//   })();
  $('.hamburger').click(function() {
    $(this).toggleClass('active');
    $('nav').toggleClass('open');
  });
// -----------------------------------------------------------------------
  // popup ---------------------------------------------
  var elements1 = $('.affiliate, .affiliate>.modal');
  
  $('#affiliate').click(function(){
    elements1.addClass('active');
  });
  
  $('.close-modal').click(function(){
    elements1.removeClass('active');
  });
  //-------
  var elements2 = $('.login, .login>.modal');
  
  $('#login').click(function(){
    elements2.addClass('active');
  });
  
  $('.close-modal').click(function(){
    elements2.removeClass('active');
  });
  //-------
  var elements3 = $('.registration, .registration>.modal');
  
  $('#registration').click(function(){
    elements3.addClass('active');
  });
  
  $('.close-modal').click(function(){
    elements3.removeClass('active');
  });
//-----------------------------------------------------------------------
//-------------------------------------------------------------------------
// Переключение между табами, добавление класса active и скрытие контента ----------
//   $(".tab_content").hide();
//   $(".tab_content:first").show();
//   /* в режиме вкладок */
//   $(".block__menu a").click(function () {
//     $(".tab_content").hide();
//     var activeTab = $(this).attr("rel");
//     $("#" + activeTab).fadeIn();
//     $(".block__menu a").removeClass("active");
//     $(this).addClass("active");
//   });
  //---------------------------------------------------------------------
  //Кнопки ---------------------------------------------------------------
  // $("#btn-type").click(function () {
  //   $(".tab_content").hide();
  //   var createTask = $(this).attr("rel");
  //   $("#" + createTask).fadeIn();
  //   $(this).addClass("active");
  // });
  //----------------------------------------------------------------------
  //----------------------------------------------------------------------
  // $("#create_profile").hide();
  // /* в режиме вкладок */
  // $("#btn-create_profile").click(function () {
  //   $(".tabl").hide();
  //   $("#create_profile").show();
  //   var activeTab = $(".block__menu a").attr("rel");
  //   $("#" + activeTab).fadeIn();
  // });
  //
  // $(".btn-back_to_profiles").click(function () {
  //   $("#create_profile").hide();
  //   $(".tabl").show();
  //   var btnPprof = $(".buttons a").attr("rel");
  //   $("#" + btnProf).fadeIn();
  // });
//-------------------------------------------------------------------------
//Добавление и удаление классов по ширене экрана  ----------
  var windowWidth = $(window).width();
  if (windowWidth < 1170) $("header").addClass("mob-menu");
  else $("header.page-header").removeClass("mob-menu");

  $(window).resize(function () {
    var windowWidth = $(window).width();
    if (windowWidth < 1170) $("header").addClass("mob-menu");
    else $("header.page-header").removeClass("mob-menu");
  });
  //----------------------------------------------------------
//Стилизация #form_popup input[type='file'] --------------
  $("form input[type='file']").change(function () {
    var t = $(this).get(0).files
      , i = !1;
    for (e in t)
      if (e == parseInt(e)) {
        i = t[e].name;
        break
      }
    !1 !== i && $(this).next("span").text(i)
  });
//----------------------------------------------------------


// ==============================================================
});















