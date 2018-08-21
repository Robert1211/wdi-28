const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16, 20, 24, 30];

const binarySearch = (haystack, needle) => {
  // Return the index of needle within the haystack
  // or null if needle is not within the haystack

  let start = 0;
  let end = haystack.length - 1;

  while (start <= end) {
    let mid = Math.round( start + (end - start) / 2 ); // This line is interesting.

    if (haystack[mid] > needle) {
      end = mid - 1;
    } else if (haystack[mid] < needle) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return null; // needle not found

}

for (let i = 0; i < a.length; i++) {
  let candidate = a[i];
  console.log( binarySearch(a, candidate) );
}
