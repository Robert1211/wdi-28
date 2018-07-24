const showImages = function (results) {
  // Nested or helper function
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
      ].join('');
  };

  results.photos.photo.forEach(function (photo) {
    const thumbnailURL = generateURL(photo);
    const $img = $('<img />', {src: thumbnailURL}); // alternatively: .attr('src', thumbnailURL);
    $img.appendTo('#images');
  });
};



const searchFlickr = function (term) {
  console.log('Searching Flickr for', term);

  const flickrURL = 'https://api.flickr.com/services/rest?jsoncallback=?';

  $.getJSON(flickrURL, {
    // Data for the query string (these will be added to the URL)
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // not a secret key
    text: term,
    format: 'json'
  }).done(showImages);
};
