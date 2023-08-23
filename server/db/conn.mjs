import { MongoClient } from 'mongodb';

const mongoPass = process.env.MONGO_PASS || "";
const client = new MongoClient(connectionStr);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e)
}

let db = conn.db('FSClusterZed');
export default db;
