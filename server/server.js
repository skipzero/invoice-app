import express from 'express';
import cors from 'cors';
import { config} from "dotenv"
// import { executeInvoiceOperations } from './invoiceCrud';
import { MongoClient } from 'mongodb';

config();
console.log('PROCESS!!!', MongoClient)

async function connectToCluster(uri) {
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

async function executeInvoiceOperations() {
  const uri = process.env.DB_URI;
  let mongoClient = new MongoClient(uri)

  try {
    mongoClient = await connectToCluster(uri);
    const db = mongoClient.db('FSClusterZed');
    const collection = db.collection('invoice');

    await createInvoiceDocument(collection);
  } finally {
    await mongoClient.close();
  }
}

await executeInvoiceOperations();

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
