$(document).ready(() => {

  // Cache some DOM elements
  const $bill = $('.bill-js');
  const $body = $('body');

  // Parallax
  $(window).on('scroll', () => {
    const scrollTop = $(window).scrollTop();
    $bill.css('background-position-y', -scrollTop * 0.5);
    $body.css('background-position-y', -scrollTop / 3);
  });

  // Bubbles
  $(window).on('mousemove', (e) => {
    // const {pageX:x, pageY:y} = e; // Destructuring

    const x = e.pageX;
    const y = e.pageY;

    const size = Math.random() * 10;

    const $bubble = $('<div class="bubble" />').css({
      top: y,
      left: x,
      width: size + 'em',
      height: size + 'em'
    });

    $bubble.appendTo($body);

    $bubble.animate({top: -200}, 4000, () => {
      $bubble.remove(); // Clean up after the animation
    });
  });
});
