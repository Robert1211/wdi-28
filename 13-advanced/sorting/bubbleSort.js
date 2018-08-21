const a = [12, 242, 53, -12, 24, 33, 1001, 25, 78];

const bubbleSort = (haystack) => {
  // Returns a new array with haystack in sorted order (ascending)
  // Use bubble sort (not .sort())
  haystack = [...haystack]; // haystack.slice(0); // duplicate the array

  let end = haystack.length - 1;

  while (end > 0) {
    for (let i = 0; i < end; i++) {
      if (haystack[i] > haystack[i + 1]) {
        // parallel assignment would be nice here
        let largerValue = haystack[i];
        haystack[i] = haystack[i + 1];
        haystack[i + 1] = largerValue;
      }
    }
    end--;
  }

  return haystack;
};

console.log( 'original', a );
console.log( 'sorted', bubbleSort(a) );
console.log( 'original', a );
