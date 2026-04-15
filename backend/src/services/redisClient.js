const Redis = require('ioredis');
const config = require('../config/env');

let redisClient;

function createRedisClient(url = config.redisUrl) {
  return new Redis(url, {
    maxRetriesPerRequest: 1,
    enableReadyCheck: true
  });
}

function getRedisClient() {
  if (!redisClient) {
    redisClient = createRedisClient();
  }

  return redisClient;
}

async function ensureRedisConnection() {
  const redis = getRedisClient();

  try {
    await redis.ping();
  } catch (error) {
    throw new Error(
      `Unable to connect to Redis at ${config.redisUrl}: ${error.message}`
    );
  }
}

function setRedisClient(client) {
  redisClient = client;
}

async function closeRedisConnection() {
  if (!redisClient) {
    return;
  }

  await redisClient.quit();
  redisClient = null;
}

module.exports = {
  closeRedisConnection,
  createRedisClient,
  ensureRedisConnection,
  getRedisClient,
  setRedisClient
};
