$(document).ready(function () {

  $('#name').on('keyup', function () {
    // Update the welcome message with the user's input
    const name = $( this ).val();
    $('header h1').html(`Welcome ${ name }`);
  }).on('blur', function () {
    // Shrink the page when we blur the input
    $('header').removeClass('begin');
  }).on('focus', function () {
    // Unshrink the page when we focus the input
    $('header').addClass('begin');
  });

  // Returns a random number between 0 and 255
  const randomColor = function () {
    return Math.random() * 255;
  };

  // Set a random background colour whenever the mouse moves.
  $(window).on('mousemove', function (event) {
    const bgColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    $('body').css('background-color', bgColor);
  });

  // Change the opacity of images based on the mouse y position.
  $(window).on('mousemove', function (event) {
    // Scale the mouse position between 1.0 and 0.0
    const opacity = (window.innerHeight - event.clientY) / window.innerHeight;
    $('img').css('opacity', opacity);
  })
});
