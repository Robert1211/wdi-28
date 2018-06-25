$(document).ready(function () {

  $('#checking-deposit').on('click', function () {
    const amount = + $('#checking-amount').val();
    // Strip the $ from the balance and convert to a number.
    const currentBalance = +$('#checking-balance').text().slice( 1 );
    const newBalance = currentBalance + amount;
    $('#checking-balance').text('$' + newBalance);
  });

  $('#checking-withdraw').on('click', function () {
    const amount = + $('#checking-amount').val();
    // Strip the $ from the balance and convert to a number.
    const currentBalance = +$('#checking-balance').text().slice( 1 );
    const otherBalance = +$('#savings-balance').text().slice( 1 );
    const totalBalance = currentBalance + otherBalance;
    const newBalance = currentBalance - amount;

    if (newBalance >= 0) {
      $('#checking-balance').text('$' + newBalance);
    } else if ( amount <= totalBalance) {
      $('#checking-balance').text('$0');
      $('#savings-balance').text('$' + (otherBalance + newBalance));
    }
  });

  $('#savings-deposit').on('click', function () {
    const amount = + $('#savings-amount').val();
    // Strip the $ from the balance and convert to a number.
    const currentBalance = +$('#savings-balance').text().slice( 1 );
    const newBalance = currentBalance + amount;

    $('#savings-balance').text('$' + newBalance);
  });

  $('#savings-withdraw').on('click', function () {
    const amount = + $('#savings-amount').val();
    // Strip the $ from the balance and convert to a number.
    const currentBalance = +$('#savings-balance').text().slice( 1 );
    const otherBalance = +$('#checking-balance').text().slice( 1 );
    const totalBalance = currentBalance + otherBalance;
    const newBalance = currentBalance - amount;

    if (newBalance >= 0) {
      $('#savings-balance').text('$' + newBalance);
    } else if (amount <= totalBalance) {
      $('#savings-balance').text('$0');
      $('#checking-balance').text('$' + (otherBalance + newBalance));
    }

  });
});
