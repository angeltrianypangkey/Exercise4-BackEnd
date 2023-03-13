const express = require('express');
const app = express();
const members = require('./member');
const user = require ( './users')

app.get('/about', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'response success',
    Description: 'Exercise #03',
    Date: new Date().toISOString(),
    Members: members
  });
});

app.get('/users', async (req, res) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(await user()));
});

app.get('/member', (req, res) => {
  res.status(200).json({members});
});

app.get('/', (req, res) => {
  res.send('This is homepage');
});

const port = 3000;
const hostname = "localhost";
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
