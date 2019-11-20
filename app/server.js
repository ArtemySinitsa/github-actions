const express = require('express');

const Welcome = require('./Welcome');

const app = express();

app.get('/welcome/:name?', (req, res) => {
  res.json({ message: new Welcome(req.params).message });
});

module.exports = app;
