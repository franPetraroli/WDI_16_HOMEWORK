const express = require('express');
const _ = require('lodash');
const data = require('./data');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

const port = process.env.PORT || 8081;
let { colors, compliments } = data.default;

app.get('/', (req, res) => {
  let name = '';
  let compliment = _.sample(compliments);
  let color = _.sample(colors);
  res.render('index', { color, compliment, name });
});

app.get('/:name', (req, res) => {
  let name = req.params.name || '';
  let compliment = _.sample(compliments);
  let color = _.sample(colors);
  res.render('index', { color, compliment, name });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
