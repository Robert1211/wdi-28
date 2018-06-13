/*
The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:

takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.
*/

const tellFortune = function (numKids, partnerName, geoLocation, jobTitle) {
  const fortune = `You will be a ${ jobTitle } in ${ geoLocation }, and married to ${ partnerName } with ${ numKids } kids.`;
  console.log( fortune );
  return fortune;
};

tellFortune( 3, 'Glenn', 'London', 'window cleaner' );
tellFortune( 4, 'Glenda', 'London', 'window cleaner' );
tellFortune( 5, 'Wendy', 'London', 'window cleaner' );


/*
The Puppy Age Calculator
You know how old your dog is in human years, but what about dog years? Calculate it!

Write a function named calculateDogAge that:

takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
outputs the result to the screen like so: "Your doggie is NN years old in dog years!"
Call the function three times with different sets of values.
Bonus: Add an additional argument to the function that takes the conversion rate of human to dog years.
*/

const calculateDogAge = function (puppyAge, conversionRate=7) { // default parameter
  const dogYears = puppyAge * conversionRate;
  const message = `Your doggie is ${ dogYears } years old in dog years!`;
  console.log( message );
  return message;
};

calculateDogAge(1);
calculateDogAge(2);
calculateDogAge(3);

calculateDogAge(1, 9);


/*
The Lifetime Supply Calculator
Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

Write a function named calculateSupply that:

takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age).
outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
Call that function three times, passing in different values each time.
Bonus: Accept floating point values for amount per day, and round the result to a round number.
*/

const calculateSupply = function (currentAge, amountPerDay) {
  const maximumAge = 55;
  const amountPerYear = amountPerDay * 365.25; // Including leap years
  const yearsRemaining = maximumAge - currentAge;
  const amountRequired = Math.ceil( amountPerYear * yearsRemaining );

  const message = `You will need ${ amountRequired } to last you until the ripe old age of ${ maximumAge }`;

  console.log(message);
  return message;
}

calculateSupply(39, 4);
calculateSupply(18, 6);
calculateSupply(50, 4);


/*
The Geometrizer
Create 2 functions that calculate properties of a circle.

Create a function called calcCircumfrence:

Pass the radius to the function.
Calculate the circumference based on the radius, and output "The circumference is NN".
Create a function called calcArea:

Pass the radius to the function.
Calculate the area based on the radius, and output "The area is NN".
*/

const calcCircumference = function (radius) {
  const diameter = radius * 2;
  const circumference = diameter * Math.PI;
  const output = `The circumference is ${ circumference }`
  console.log( output );
  return output;
};

calcCircumference(10);
calcCircumference(20);
calcCircumference(1000);

const calcArea = function (radius) {
  const area = Math.PI * radius * radius; // pi * r^2
  const output = `The area is ${ area }`;
  console.log( output );
  return output;
}

calcArea(10);
calcArea(20);
calcArea(1000);

/*
The Temperature Converter
It's hot out! Let's make a converter.

Create a function called celsiusToFahrenheit:

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Create a function called fahrenheitToCelsius:
Now store a fahrenheit temperature into a variable.

Convert it to celsius and output "NN°F is NN°C."
*/

const celsiusToFahrenheit = function (celsius) {
  const fahrenheit = celsius * 1.8 + 32;
  const msg = `${ celsius }°C is ${ fahrenheit }°F`;
  console.log( msg );
  return fahrenheit;
}

celsiusToFahrenheit( 17 );

const fahrenheitToCelsius = function (fahrenheit) {
  celsius = (fahrenheit - 32) / 1.8; // Reversing the above operation
  const msg = `${ fahrenheit }°F is ${ celsius }°C.`;
  console.log(msg);
  return celsius;
}

fahrenheitToCelsius( 62.6 );
