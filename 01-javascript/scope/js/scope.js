/*
ES6 offers three keywords for identifying or naming data:

const
let
var

These differ in scope, which determines which identifiers are accessible
at different points in your program.

As a general rule, try to declare your identifiers with const first.

If you need to reassign: change the const to a let.

If you need to access the identifier outside of a block: change the let to a var.

*/

// var
////////////////////////////////////////////////////////////////////////////////
var message = "hello";
const showMessage = function () {
  console.log(message); // a var in a global scope is accessible within functions.
}

showMessage();

// var within a function
////////////////////////////////////////////////////////////////////////////////

const showLocalMessage = function () {
  // local message variable
  var message = "good morning"; // this shadows the global message var
  console.log( message );
}

showLocalMessage();

// a var inside a block
////////////////////////////////////////////////////////////////////////////////

const answer = 42;
if (answer === 42) {
  var favoriteFood = 'sashimi'; // favoriteFood will exist/be visible outside the block
}
console.log( favoriteFood ); // Expect to see sashimi

// a let inside a block
////////////////////////////////////////////////////////////////////////////////
const password = 'swordfish';
if (password === 'swordfish') {
  let quote = 'The human mind has chords';
  console.log( quote );
}
// console.log(quote); // quote is inaccessible here.

// A const follows the same rules as a let: block scope
// Except you cannot reassign to it.

const daysPerWeek = 7;
if (daysPerWeek === 7) {
  const inspirationalQuote = 'Something very inspirational';
  console.log( inspirationalQuote );
}

// console.log( inspirationalQuote ); // inaccessible here
