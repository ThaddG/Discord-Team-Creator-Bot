const express = require('express');

const server = express();

const PORT = 8000;

server.all('/', (req, res) => {
  res.send('ShaZam Bot is running...');
});

function keepAlive() {
  server.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });
}

module.exports = keepAlive;