$(document).ready(function () {

  $('#name').on('keyup', function () {
    const name = $( this ).val();
    $('header h1').html(`Welcome ${ name }`);
  }).on('blur', function () {
    $('header').removeClass('begin');
  }).on('focus', function () {
    $('header').addClass('begin');
  });

  const randomColor = function () {
    return Math.random() * 255;
  };

  $(window).on('mousemove', function (event) {
    const bgColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    $('body').css('background-color', bgColor);
  });

  $(window).on('mousemove', function (event) {
    const opacity = (window.innerHeight - event.clientY) / window.innerHeight;
    $('img').css('opacity', opacity);
  })
});
