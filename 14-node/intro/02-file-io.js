const fs = require('fs'); // From the node standard library

// Simple cat
// try {
//   // Dangerous code
//   const data = fs.readFileSync('flintstones.txxxt', 'utf-8'); // Blocking
//   console.log( data );
// } catch (err) {
//   console.log('there was an error');
//   console.log( err );
//   console.log('Exiting gracefully');
// }

// Asynchronous file IO:
// Better efficiency because it's non-blocking
// Callback function will usually receive:
//   error param (first, so make sure handle it)
//   data param
fs.readFile('flintstones.txt', 'utf-8', (error, data) => {
  if (error) {
    return console.error(error); // This is a bit wanky.
  }
  console.log( data );
});

// TODO: Rewrite this using Promises
