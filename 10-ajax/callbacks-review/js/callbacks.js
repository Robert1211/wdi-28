// CALLBACKS REVIEW ////////////////////////////////////////////////////////////

// A callback is a function we pass into another function which runs the callback for us.

// Timers use callbacks ////////////////////////////////////////////////////////
// console.log('before setTimeout');
// setTimeout(function () {
//   console.log('this message is from inside the callback function');
// }, 4000);
// console.log('after setTimeout');

// Document ready in jQuery uses callbacks /////////////////////////////////////
console.log('A before the document ready');
$(document).ready(function () {
  console.log('B when the document is ready');
});
console.log('C after the document ready');

// Event handlers use callbacks ////////////////////////////////////////////////
console.log('Groucho');
$(document).on('click', function () {
  console.log('Harpo');
});
console.log('Chico');

// ADVANCED ////////////////////////////////////////////////////////////////////
// We can write our own functions which take callback arguments
const colours = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const each = function (someArray, callback) {
  for (let i = 0; i < someArray.length; i++) {
    callback( someArray[i] );
  }
};

each(colours, function (c) {
  console.log( c );
});

each(['Groucho', 'Harpo', 'Chico'], function (brother) {
  console.log( brother.toUpperCase() );
});

// colours.each do |colour|
//   puts colour
// end

// es5 /////////////////////////////////////////////////////////////////////////
// .forEach, (also .map, .reduce)
colours.forEach(function (c) {
  console.log( c );
});
