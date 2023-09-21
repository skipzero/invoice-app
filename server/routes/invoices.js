import express from "express";
import db from "../db/conn.js";

import { ObjectId } from "mongodb";

const router = express.Router();

// find all invoices
router.get("/", async (req, res) => {
  let collection = db.collection("invoices");
  let results = await collection.find({}).toArray();

  res.send(results).status(200);
});

// find invoices by client
router.get("/:client", async (req, res) => {
  let collection = await db.collection("invoices");
  let query = { client: req.params.client };
  let results = await collection.find(query).toArray();

  if (!results) res.send("Not Found").status(404);
  else res.send(results).status(200);
});

// find invoice by ID
router.get("/:id", async (req, res) => {
  let collection = await db.collection("invoices");
  let query = { id: ObjectId(req.params.id) };
  let result = await collection.find(query);

  res.send(result).status(200);
});

// Create new Invoice
router.post("/", async (req, res) => {
  const collection = await db.collection("invoices");
  let newInvoice = req.body;
  newDocument.date = new Date();
  let result = await collection.insertOne(newDocument);

  res.send(result).status(204);
});

// update invoice by ID
router.post("/:id", async (req, res) => {
  const query = { _id: ObjectId(req.params.id) };

  const collection = await db.collection("invoices");
  let result = await collection.updateOne(query, { $set: req.body });
});

// Delete invoice by ID
router.delete("/:id", async (req, res) => {
  const query = { _id: ObjectId(req.params.id) };

  const collection = db.collection("invoices");
  const result = await collection.deleteOne(query);

  res.send(result).status(200);
});

export default router;
