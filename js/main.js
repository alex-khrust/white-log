$(document).ready(function ()  {
// =======================================================================
// Hamburger -----------------------------------------
  $('.hamburger').click(function() {
    $(this).toggleClass('active');
    $('nav').toggleClass('open');
  });
// -----------------------------------------------------------------------
  // popup ---------------------------------------------
  var elements1 = $('.modal-overlay, .modal-overlay>.modal');
  
  $('.report-btn').click(function(){
    elements1.addClass('active');
    $('header, section').css({filter:"blur(4px)", transition:".3s"});
  });
  
  $('.close-modal').click(function(){
    elements1.removeClass('active');
    $('header, section').css({filter:"none", transition:".3s"});
  });
//-----------------------------------------------------------------------
//Добавление и удаление классов по ширене экрана  ----------
  var windowWidth = $(window).width();
  if (windowWidth < 1170) $("header").addClass("mob-menu");
  else $("header").removeClass("mob-menu");

  $(window).resize(function () {
    var windowWidth = $(window).width();
    if (windowWidth < 1170) $("header").addClass("mob-menu");
    else $("header").removeClass("mob-menu");
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















