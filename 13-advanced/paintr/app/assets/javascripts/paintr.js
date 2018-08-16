$(document).ready(() => {
  $('#add-color').on('click', () => {
    const color = $('#color').val();
    const $swatch = $('<div />').addClass('swatch').css('background-color', color);
    $swatch.appendTo('.palette');
  });

  // Event delegation: attach event handlers to elements that don't exist yet.
  $('.palette').on('click', '.swatch', function () {
    $('.selected').removeClass('selected'); // Clear existing selection.
    $(this).addClass('selected');
  });

  // Event delegation for efficiency
  $('.canvas').on('mouseover', '.pixel', function (event) {
    // You must hold down shift to actually draw.
    if (event.shiftKey === false) {
      return;
    }
    const color = $('.selected').css('background-color');
    $(this).css('background-color', color);
  });
});
