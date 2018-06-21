const thumbnailify = function ($link) {
  // const $link = $( $links[i] ); // Convert a vanilla DOM node back into a jQ object

  const videoURL = $link.attr('href'); // getter
  const thumbnailURL = youtube.generateThumbnailUrl( videoURL );

  const $thumbnail = $('<img>').attr('src', thumbnailURL); // setter
  $link.append( $thumbnail ); // or .prepend() if you prefer

  $link.on('click', function (event) {
    event.preventDefault(); // Do not follow the link.
    const embedURL = youtube.generateEmbedUrl(videoURL);
    const embedCode = `<iframe width="560" height="315" src="${ embedURL }" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    $('#video').hide().html( embedCode ).fadeIn( 2000 );
  });
}

const $links = $('a');

for (let i = 0; i < $links.length; i++) {
  const $a = $( $links[i] );
  thumbnailify( $a );
}
