$(document).ready(function() {
  $('#menu-hamburger').on('click', function(event) {
    $icon = $(event.currentTarget);
    if($icon.hasClass('menu-closed')) {
      $('#menu-links').show();
      $('#content').hide();
      $('#logo').hide();
      $('#menu').addClass('mobile-menu');
      $icon.removeClass('menu-closed');
    } else {
      $('#menu-links').hide();
      $('#content').show();
      $('#logo').show();
      $('#menu').removeClass('mobile-menu');
      $icon.addClass('menu-closed');
    }
  });
});
