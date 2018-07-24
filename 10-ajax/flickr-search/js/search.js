// Iterates through photo results from Flickr's API and displays them
// as images on the page.
const showImages = function (results) {
  // Nested or helper function: returns the url for a given photo object.
  const generateURL = function (photo) {
      return [
        'http://farm',
        photo.farm,
        '.static.flickr.com/',
        photo.server,
        '/',
        photo.id,
        '_',
        photo.secret,
        '_q.jpg' // Change 'q' to something else for different sizes
      ].join(''); // Return a string by join()ing the array elements.
  };

  console.log( results ); // For debugging.

  results.photos.photo.forEach(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img />', {src: thumbnailURL}); // alternatively: .attr('src', thumbnailURL);
    $img.appendTo('#images');
  });
};

const searchFlickr = function (term) {
  console.log('Searching Flickr for', term);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  // This isn't really an AJAX request, it's JSONP. But jQuery lets us
  // treat it like AJAX so you can ignore that minor detail.
  $.getJSON(flickrURL, {
    // Data for the query string (these will be added to the URL)
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // not a secret key
    text: term,
    format: 'json'
  }).done(showImages);
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // Do not submit this form; let's stay on this page.
    const query = $('#query').val();
    searchFlickr(query);
  });

  // This event fires very frequently, faster than we need.
  $(window).on('scroll', function () {
    // scrollBottom is the number of pixels in the document below the bottom of the window.
    const scrollBottom = $(document).height() -
                         ( $(window).scrollTop() + $(window).height() );

    // Request more results from Flickr if we're near the bottom of the document.
    if (scrollBottom < 500) {
      const query = $('#query').val();
      searchFlickr(query);
      // TODO: Don't request more results until we've displayed
      // the previous results.
    }

  });
});
