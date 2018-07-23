const fetchFact = function () {
  const xhr = new XMLHttpRequest();

  // This callback function is run every time the readyState changes (i.e. from 0..4);
  xhr.onreadystatechange = function () {
    // Ignore all readyStates except 4.
    if (xhr.readyState !== 4) {
      return;
    }

    const info = JSON.parse( xhr.responseText );

    // When we get here, the responseText should have a value from the remote server.
    const p = document.createElement('p');
    p.innerHTML = '<strong>' + info.number + '</strong>: ' + info.text;
    document.body.appendChild( p );
  };

  xhr.open('GET', 'http://numbersapi.com/random/trivia?json');
  xhr.send(); // Asynchronous: runs in the background
};

document.getElementById('fetch').addEventListener('click', fetchFact);
fetchFact();
