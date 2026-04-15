const app = require('./app');
const config = require('./config/env');

app.listen(config.port, () => {
  console.log(`Backend listening on http://localhost:${config.port}`);
});
