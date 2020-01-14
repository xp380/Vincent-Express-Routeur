const express = require('express');
const tags = require('./routes/tags');

const app = express();
const port = 8000;

app.use('/api/tags', tags);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});
