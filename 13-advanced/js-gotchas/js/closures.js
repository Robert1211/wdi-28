// closures
// javascript supports first class functions AND closures.

// used to store private data that is inaccessible except in one particular function.

// let id = 0;
//
// const nextId = function () {
//   return id++;
// };

const idMaker = function () {
  // set up our initial ID
  let id = 0;
  let password = 'chicken';

  // return a FUNCTION that refers to/accesses that ID
  return function () {
    return id++; // id persists through the closure.
  }
};

const nextId = idMaker();
const otherNextId = idMaker();

// HTML Tags ///////////////////////////////////////////////////////////////////
// const p = function (content) {
//   return '<p>' + content + '</p>';
// }
//
// const h1 = function (content) {
//   return '<h1>' + content + '</h1>';
// }
//
// const h2 = function (content) {
//   return '<h2>' + content + '</h2>';
// }

const tag = function (tagName) {
  return function (content) {
    return `<${tagName}>${content}</${tagName}>`;
  }
};

const p = tag('p');
const h1 = tag('h1');
const h2 = tag('h2');
const span = tag('span');
const div = tag('div');

// $(document).ready(function () {
//   const mySecretPassword = 'chicken';
//
//   $('button').on('click', function () {
//     console.log( mySecretPassword ); // This value persists through a closure
//   });
//
//   console.log('document ready is over');
// });
//
// console.log(mySecretPassword);
