const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

const musicData = require('./music-data.json');

app.use('/images', express.static('images'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
