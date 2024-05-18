$(document).ready(function() {
  $('a[href*="#"]').click(function(event) {
    var section = $(this.hash);
    section = section.length ? section : $('[name=' + this.hash.slice(1) + ']');

    if (section.length) {
      event.preventDefault();
      $('html, body').animate({
        scrollTop: section.offset().top
      }, 1000);
    }
  });
});
