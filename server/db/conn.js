import { MongoClient } from "mongodb";

const connectionString = process.env.DB_URI;

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}

const db = conn.db("invoices");
export default db;
