const express = require('express');
const axios = require('axios');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('pages/home');
});

app.get('/search', (req, res) => {
  const title = req.query.title;
  const booksURL = `https://www.googleapis.com/books/v1/volumes?q=${ title }`;

  // Async
  axios.get(booksURL).then((result) => {
    const cover = result.data.items[0].volumeInfo.imageLinks.thumbnail;
    res.render('pages/search', {
      cover: cover, // a single value
      bookInfo: result.data.items[0].volumeInfo // all of the first book info
    });
  });
});

console.log('http://localhost:8888/');
app.listen(8888); // Check the heroku docs to find the right port in production.
