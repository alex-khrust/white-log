$(document).ready(function ()  {
// =======================================================================
// Hamburger -----------------------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('active');
    $('nav').toggleClass('open');
    $('nav a').click(function () {
      $('.hamburger').removeClass('active');
      $('nav').removeClass('open');
    });
  });
// -----------------------------------------------------------------------
  // popup ---------------------------------------------
  var elements1 = $('.modal-overlay, .modal-overlay>.modal');
  
  $('.report-btn').click(function(){
    elements1.addClass('active');
    $('header, section').css({filter:'blur(4px)', transition:'.3s'});
    $('html').css({overflow:'hidden'});
  });
  
  $('.close-modal').click(function(){
    elements1.removeClass('active');
    $('header, section').css({filter:'none', transition:'.3s'});
    $('html').css({overflow:'none'});
  });
//-----------------------------------------------------------------------
//Добавление и удаление классов по ширене экрана  ----------
  var width = 768;
  var windowWidth = $(window).width();
  if (windowWidth < width) {
    $("header").addClass("mob-menu");
    // $("nav").hide();
    // $(".hamburger").show();
  }
  else {
    $("header").removeClass("mob-menu");
    // $("nav").show();
    // $(".hamburger").hide();
  }

  $(window).resize(function () {
    var windowWidth = $(window).width();
    if (windowWidth < width) {
      $("header").addClass("mob-menu");
      // $("nav").hide();
      // $(".hamburger").show();
    }
    else {
      $("header").removeClass("mob-menu");
      // $("nav").show();
      // $(".hamburger").hide();
    }
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















