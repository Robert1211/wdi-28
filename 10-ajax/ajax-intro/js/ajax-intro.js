const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (xhr.readyState !== 4) {
    return;
  }

  // we can safely access xhr.responseText here
  document.getElementById('result').innerHTML = xhr.responseText;
};

xhr.open('GET', 'http://numbersapi.com/random/trivia');
xhr.send(); // Asynchronous: runs in the background
