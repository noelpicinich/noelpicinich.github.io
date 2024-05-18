$(document).ready(function() {
  var height = $(window).height();
  var width = $(window).width();

  $("header").css("height", height - 40);
  $("section").css("min-height", height);
  $("#home").css("min-height", height-60);


  $(window).resize( function() {
    $("header").css("height", $(window).height() - 40);
  });

  var home_top = $('#home').offset().top;
  var about_top = $('#about').offset().top;
  var experience_top = $('#experience').offset().top;
  var campus_top = $('#campus').offset().top;
  var projects_top = $('#projects').offset().top;

  var current_active = '#home_item';

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();

    if (scroll > campus_top + height/2) {
      $('#projects_item').addClass('active');
      if (current_active != '#projects_item') {
        $(current_active).removeClass('active');
      };
      current_active = '#projects_item';
    } else if (scroll > experience_top + height/2) {
      $('#campus_item').addClass('active');
      if (current_active != '#campus_item') {
        $(current_active).removeClass('active');
      };
      current_active = '#campus_item';
    } else if (scroll > about_top + height/2) {
      $('#experience_item').addClass('active');
      if (current_active != '#experience_item') {
        $(current_active).removeClass('active');
      };
      current_active = '#experience_item';
    } else if (scroll > home_top + height/2) {
      $('#about_item').addClass('active');
      if (current_active != '#about_item') {
        $(current_active).removeClass('active');
      };
      current_active = '#about_item';
    } else if (scroll < home_top + height/2) {
      $('#home_item').addClass('active');
      if (current_active != '#home_item') {
        $(current_active).removeClass('active');
      };
      current_active = '#home_item';
    }


  });

});
