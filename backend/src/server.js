const app = require('./app');
const config = require('./config/env');
const { ensureRedisConnection } = require('./services/redisClient');

async function startServer() {
  try {
    await ensureRedisConnection();

    app.listen(config.port, () => {
      console.log(`Backend listening on http://localhost:${config.port}`);
    });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

startServer();
