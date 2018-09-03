$(document).ready(function() {
  $('#menu-hamburger').on('click', function(event) {
    $icon = $(event.currentTarget);
    if($icon.hasClass('menu-closed')) {
      console.log('open');
      $('#menu-links').show();
      $('#content').hide();
      $('#logo').hide();
      $('#menu').addClass('mobile-menu');
      $icon.removeClass('menu-closed');
    } else {
      console.log('close');
      $('#menu-links').hide();
      $('#content').show();
      $('#logo').show();
      $('#menu').removeClass('mobile-menu');
      $icon.addClass('menu-closed');
    }
  });
});