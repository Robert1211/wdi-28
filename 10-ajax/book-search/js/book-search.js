const fetchBook = function (title) {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState != 4) {
      return; // Not ready yet.
    }

    // ALL AJAX PROCESSING MUST OCCUR IN HERE

    const info = JSON.parse( xhr.responseText );
    const cover = info.items[0].volumeInfo.imageLinks.thumbnail;

    document.getElementById('cover').src = cover;

  }

  xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${ title }`);
  xhr.send(); // Asynchronous
};

document.getElementById('search_form').addEventListener('submit', function (event) {
  event.preventDefault(); // DO NOT submit the form or leave the current page.

  const bookTitle = document.getElementById('book_title').value;
  fetchBook(bookTitle); // asynchronous
});
