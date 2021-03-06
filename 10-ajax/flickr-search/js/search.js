'use strict';

var state = {
  page: 1,
  lastPage: false
};

// Iterates through photo results from Flickr's API and displays them
// as images on the page.
var showImages = function showImages(results) {
  // Nested or helper function: returns the url for a given photo object.
  var generateURL = function generateURL(photo) {
    return ['http://farm', photo.farm, '.static.flickr.com/', photo.server, '/', photo.id, '_', photo.secret, '_q.jpg' // Change 'q' to something else for different sizes
    ].join(''); // Return a string by join()ing the array elements.
  };

  console.log('Results:', results); // For debugging.

  results.photos.photo.forEach(function (photo) {
    var thumbnailURL = generateURL(photo);
    var $img = $('<img />', { src: thumbnailURL }); // alternatively: .attr('src', thumbnailURL);
    $img.appendTo('#images');
  });
};

var searchFlickr = function searchFlickr(term) {
  if (state.lastPage) {
    return;
  }

  console.log('Searching Flickr.com for', term);

  var flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  // This isn't really an AJAX request, it's JSONP. But jQuery lets us
  // treat it like AJAX so you can ignore that minor detail.
  $.getJSON(flickrURL, {
    // Data for the query string (these will be added to the URL)
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // not a secret key
    text: term,
    format: 'json',
    page: state.page++
  }).done(showImages).done(function (results) {
    if (results.photos.page >= results.photos.pages) {
      state.lastPage = true;
    }
  });
};

$(document).ready(function () {
  $('#search').on('submit', function (event) {
    event.preventDefault(); // Do not submit this form; let's stay on this page.
    var query = $('#query').val();
    state.page = 1;
    state.lastPage = false;
    searchFlickr(query); // Async
    $('#images').empty();
  });

  // This event fires very frequently, faster than we need.
  var throttledSearchFlickr = _.throttle(searchFlickr, 6000, { trailing: false });
  $(window).on('scroll', function () {
    // scrollBottom is the number of pixels in the document below the bottom of the window.
    var scrollBottom = $(document).height() - ($(window).scrollTop() + $(window).height());

    // Request more results from Flickr if we're near the bottom of the document.
    if (scrollBottom < 1000) {
      // Adjust this variable to suit your taste
      var query = $('#query').val();
      throttledSearchFlickr(query);
    }
  });
});