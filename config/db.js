/*
const { MongoClient } = require('mongodb');
//const { MongoClient } = require('mongoose');
const mongoose= require("mongoose");
// Connection URL
// db nadia: const url = 'mongodb+srv://LamaD:LamaD@cluster0.nv9ry.mongodb.net/shop?retryWrites=true&w=majority';
const url= 'mongodb+srv://thaissia:sami@cluster0.vw2zq.mongodb.net/insappes?retryWrites=true&w=majority'
const client = new MongoClient(url);
const dbName = 'insappes';

async function main() {
  await client.connect();
  console.log('Connected successfully to mongo');
  return '';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
  

*/

