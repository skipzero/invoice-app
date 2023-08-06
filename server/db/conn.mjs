import { MongoClient } from 'mongodb';

const connectionStr = process.env.ATLAS_DB || "";
const client = new MongoClient(connectionStr);

let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e)
}

let db = conn.db('FSClusterZed');
export default db;