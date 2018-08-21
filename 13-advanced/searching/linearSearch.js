const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 20, 24, 30];

const linearSearch = (haystack, needle) => {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle) {
      return i;
    }
  }

  return null; // needle was not found
};

console.log( 'found', linearSearch(a, 20) );
console.log( 'not found', linearSearch(a, 18) );
