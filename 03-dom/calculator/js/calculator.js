const squareButton = document.getElementById('square-button');

const square = function () {
  console.log('squaring coming soon');
  const value = document.getElementById('square-input').value;
  const result = parseFloat(value) * parseFloat(value);

  const message = `${ value } squared is ${ result }`;
  document.getElementById('solution').innerHTML = message;
};

squareButton.addEventListener( 'click', square );
