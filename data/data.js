const { MongoClient } = require('mongodb');

const dbName = 'tsahighscore';
const url = 'mongodb://tsahighscore:Ro01ES6~L8m~@den1.mongo1.gear.host:27001/tsahighscore';

const client = new MongoClient(url, {
  useUnifiedTopology: true
});

module.exports = async () => {
  await client.connect();

  return client.db(dbName);
};