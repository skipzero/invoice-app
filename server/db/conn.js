import { MongoClient } from "mongodb";

import dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.DB_URI;

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  toast.error(`Connection Error: ${e.message}`);
  console.error(e);
}

const db = conn.db("invoices");
export default db;
