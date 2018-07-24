const fetchBook = function (title) {
  // .done uses jQuery's Deferreds
  $.ajax(`https://www.googleapis.com/books/v1/volumes?q=${ title }`).done(function (info) {
    const cover = info.items[0].volumeInfo.imageLinks.thumbnail;
    $('#cover').attr('src', cover);
  }).done(function (data) {
    console.log(data);
  }).fail(function () {
    alert('Something broke');
  });
};

$('#search_form').on('submit', function (event) {
  event.preventDefault();
  const bookTitle = $('#book_title').val();
  fetchBook(bookTitle);
});
