import express from 'express';
import cors from 'cors';
import { config} from "dotenv"
// import { executeInvoiceOperations } from './invoiceCrud';
import { MongoClient } from 'mongodb';

config();

const PORT = 3000 //process.env.PORT || 3000;
const app = express();

// Connection URL
const url = process.env.DB_URI;
// Database Name
debugger;
const dbName = 'invoices';
// Create a new MongoClient
const client = new MongoClient(url);
// Connect to the server
console.log('=======', process.env.DB_URI)
client.connect(async function (err) {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  const db = client.db(dbName);
  const collection = db.collection('invoice');

  // Find the last record by sorting in descending order and limiting to 1
  const lastRecord = await collection.find().sort({ _id: -1 }).limit(1).toArray();
  if (lastRecord.length > 0) {
    console.log('Last Record:', lastRecord[0]);
  } else {
    console.log('No records found.');
  }
  // Close the connection
  client.close();
});

app.use(cors());
app.use(express.json());

app.get('/last', (req, res) => {
  let collection = db.collection('invoice');
  let q
})

app.listen(PORT, () => {
  console.log('listening on port', PORT)
})
