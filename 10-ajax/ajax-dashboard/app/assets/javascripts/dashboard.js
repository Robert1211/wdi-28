$(document).ready(function () {
  setInterval(function () {
    $.getJSON('/info').done(function (response) {
      $('#brother').text( response.brother );
    }).done(function (response) {
      $('#time').text( response.time );
    }).done(function (response) {
      $('#uptime').text( response.uptime );
    }).done(function (bonus) {
      console.log( bonus.fortune );
    });

    // $('#time').load('/time');
    // $.get('/time').done(function (time) {
    //   $('#time').text( time );
    // });
    //
    // $('#brother').load('/brother');
    // $.get('/brother').done(function (brother) {
    //   $('#brother').text(brother);
    // });
    //
    // $('#uptime').load('/uptime');
    // $.get('/uptime').done(function (uptime) {
    //   $('#uptime').text(uptime);
    // });
  }, 1000);
});
