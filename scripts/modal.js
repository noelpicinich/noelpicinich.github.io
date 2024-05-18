$(document).ready(function() {
  $('.modal').hide();

  $('#courses_btn').click(function() {
    $('.modal').show();
    var modal_width = $('table')["0"].scrollWidth;
    $('.modal-content').css('width', modal_width + 'px');
    console.log($('.modal-content').width());
  });

  $('#exit').click(function() {
    $('.not_cs').show();
    $('.modal').hide();
  });

  $('.modal').click(function(event) {
    console.log(event.target.className);
      if (event.target.className === 'modal') {
          $('.not_cs').show();
          $('.modal').hide();
      }
  });

  $('#courses_filter').click(function() {
    $('.not_cs').toggle();
  });

});
