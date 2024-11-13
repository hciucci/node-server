const express = require('express');
const app = express();
const PORT = 3000;

const musicData = require('./music-data.json');

app.use(express.static('public'));

app.use('/images', express.static('images'));

app.get('/api/music', (req, res) => {
  res.json(musicData.music);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
