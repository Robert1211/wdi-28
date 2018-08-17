const express = require('express');

const app = express();
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('pages/home');
});

console.log('http://localhost:8888/');
app.listen(8888); // Check the heroku docs to find the right port in production.
