const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb+srv://Users_web:WEB123@cluster0.f8m4h.mongodb.net/test';
//const client = new MongoClient(process.env.url);
const client = new MongoClient(url);
const dbName = 'myProject';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());