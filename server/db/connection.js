import { MongoClient } from 'mongodb';

export async function connectToCluster(uri) {
  let mongoClient;

  try {
    mongoClient = new MongoClient(uri);
    console.log('Connecting to mongodb...', mongoClient);

    await mongoClient.connect();
    console.log('Successfully connected...');

    return mongoClient;
  } catch (err) {
    console.error('connection failed...,', err);
    process.exit();
  }
}
