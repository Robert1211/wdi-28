console.log( _.VERSION );

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// each() //////////////////////////////////////////////////////////////////////

// nums.forEach(function (n) {
//   console.log( n );
// });
//
// _.each(nums, function (n) {
//   console.log( n );
// });

_(nums).each(function (number, index, entireArray) {
  console.log( 'number', number );
  console.log( 'index', index );
  console.log( 'entireArray', entireArray );
});

// .each() can also iterate over objects
const obj = {
  4: 'four',
  5: 'five',
  6: 'six'
};

_(obj).each(function (value, key, entireObject) {
  console.log(`The key ${ key } has the value of ${ value }`);
});

const groucho = {
  name: 'Groucho Marx',
  instrument: 'guitar',
  vice: 'cigars'
};

_(groucho).each(function (v, k) {
  console.log(`${k} is ${v}`);
});

// map() ///////////////////////////////////////////////////////////////////////

// const byFives = [];
// _(nums).each(function (n) {
//   byFives.push( n * 5 );
// });

const byFives = _(nums).map(function (n) {
  return n * 5;
});
console.log( byFives );

// map() also works with objects
const grouchoInfo = _(groucho).map(function (v, k) {
  return `${k}: ${v}`.toUpperCase();
});

console.log( grouchoInfo );

// reduce() ////////////////////////////////////////////////////////////////////
const sum = _(nums).reduce(function (runningTotal, n) {
  console.log('runningTotal', runningTotal, 'n', n);
  return runningTotal + n;
});
console.log(nums, sum);

// reduce() also works with objects


// find() //////////////////////////////////////////////////////////////////////
const firstMultipleOfFour = _(nums).find(function (n) {
  return n % 4 === 0;
});

// find() also works with objects (this isn't very useful)
const firstMatch = _(groucho).find(function (value, key) {
  return value === 'insomnia';
});
console.log( firstMatch );


// filter() ////////////////////////////////////////////////////////////////////
const isEven = function (n) {
  return n % 2 === 0;
}

const evens = _(nums).filter(isEven);
console.log( evens );

// reject() ////////////////////////////////////////////////////////////////////
const odds = _(nums).reject(isEven);
console.log( odds );


// pluck() /////////////////////////////////////////////////////////////////////
const bros = [
  {name: 'groucho', instrument: 'guitar', vice: 'cigars'},
  {name: 'harpo', instrument: 'harp', vice: 'mutism'},
  {name: 'chico', instrument: 'piano', vice: 'infidelity'}
];

console.log( _(bros).pluck('name') );

// max() and min() /////////////////////////////////////////////////////////////
console.log( _(nums).max() );
console.log( _(nums).min() );


// sortBy() ////////////////////////////////////////////////////////////////////
console.log( _(bros).sortBy('vice') );


// shuffle() ///////////////////////////////////////////////////////////////////
console.log( _(nums).shuffle() );

// sample() ////////////////////////////////////////////////////////////////////
console.log( _(nums).sample() );
