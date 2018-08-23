// this, bind, (call and apply)

const groucho = {
  fullName: 'Groucho Julius Marx',
  greeting() {
    return `Good evening, my name is ${ this.fullName }`; // `this` refers to the current object
  }
};

const unboundGreeting = groucho.greeting; // Breaks the connection to `this`
console.log( unboundGreeting() ); // Good evening, my name is undefined.

// .call -- invoke a function with some specific value for `this`
console.log( unboundGreeting.call( groucho ) ); // Good evening, my name is Grouch Julius Marx.
console.log( unboundGreeting.call( { fullName: 'Chico Marx' } ) ); //  // Good evening, my name is Harpo Marx.

// .bind -- returns a new function permanantly bound to whatever object you pass in.
const boundGreeting = unboundGreeting.bind( groucho ); // boundGreeting = groucho.greeting.bind( groucho );
boundGreeting(); // Good evening, my name is Grouch Julius Marx.

// .apply //////////////////////////////////////////////////////////////////////
const numbers = [1, 4, 6, 8, 9, 1001];

// What is the maximum number?
// es5 and previous
Math.max.apply( null, numbers ); // .apply will turn an array of args into a list of args.
// es6
Math.max( ...numbers ); // the ... spread operator also turns an array of args into a list of args.
