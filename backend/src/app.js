const express = require('express');
const cors = require('cors');
const config = require('./config/env');
const weatherRouter = require('./routes/weather');

const app = express();

app.use(
  cors({
    origin: config.clientOrigin
  })
);
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/weather', weatherRouter);

module.exports = app;
