/*
The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

Store the following into variables: number of children, partner's name, geographic location, job title.
Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
*/

const numKids = 3;
const partnerName = 'Glenn';
const geoLocation = 'London';
const jobTitle = 'window cleaner';

// const fortune = 'You will be a ' + jobTitle + ' in ' + geoLocation + ', and married to ' + partnerName + ' with ' + numKids + ' kids.';

const fortune = `You will be a ${ jobTitle } in ${ geoLocation }, and married to ${ partnerName } with ${ numKids } kids.`;

console.log( fortune );

/*
The Age Calculator
Forgot how old someone is? Calculate it!

Store the current year in a variable.
Store their birth year in a variable.
Calculate their 2 possible ages based on the stored values.
Output them to the screen like so: "They are either NN or NN", substituting the values.
*/

const currentYear = 2018;
const birthYear = 1978;

const age1 = currentYear - birthYear; // if you've had your birthday this year
const age2 = age1 - 1; // or if you have yet to have your birthday this year.

console.log(`They are either ${ age2 } or ${ age1 }`); // backticks

/*
The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Store your current age into a variable.
Store a maximum age into a variable.
Store an estimated amount per day (as a number).
Calculate how many you would eat total for the rest of your life.
Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".
*/

const currentAge = 39;
const maximumAge = 55;
const amountPerDay = 4;
const amountPerYear = amountPerDay * 365.25; // Including leap years
const yearsRemaining = maximumAge - currentAge;
const amountRequired = amountPerYear * yearsRemaining;

console.log(`You will need ${ amountRequired } to last you until the ripe old age of ${ maximumAge }`);

/*
The Geometrizer
Calculate properties of a circle, using the definitions here.

Store a radius into a variable.
Calculate the circumference based on the radius, and output "The circumference is NN".
Calculate the area based on the radius, and output "The area is NN".
*/

const radius = 10;
const diameter = radius * 2;
const circumference = diameter * Math.PI;
console.log(`The circumference is ${ circumference }`);

const area = Math.PI * radius * radius; // pi * r^2
console.log(`The area is ${ area }`);

/*
The Temperature Converter
It's hot out! Let's make a converter based on the steps here.

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C."
*/

let celsius = 17;
const fahrenheit = celsius * 1.8 + 32;
console.log(`${ celsius }°C is ${ fahrenheit }°F`);

celsius = (fahrenheit - 32) / 1.8; // Reversing the above operation
console.log(`${ fahrenheit }°F is ${ celsius }°C.`);
