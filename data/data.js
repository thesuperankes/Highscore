const { MongoClient } = require('mongodb');
const config = require('../config');
const dbName = 'tsahighscore';
const url = config.database.toString();

const client = new MongoClient(url, {
  useUnifiedTopology: true
});

module.exports = async () => {
  await client.connect();

  return client.db(dbName);
};