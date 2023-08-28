import express from 'express';
import db from '../db/conn.js';
import { ObjectId } from 'mongodb';

const router = express.Router();

// collection of results
router.get('/', async (req, res) => {
  let collection = await db.collection('invoice');

  let results = await collection.find({}).toArray();

  res.send(results).status(200)
});


// single result
router.get(':/id', async (req, res) => {
  let collection = db.collection('invoice');
  let query = req.params.id;
  let result = await collection.findOne(ObjectId(query));
  if (result.length < 1) res.send('Not Found').status(404);
  else res.send(result).status(200);
})

// create new record
router.post('/:id', async (req, res) => {
  const {
    client,
    address,
    line_items,
    notes
  } = req.body;
  const objIdNumb = req.params.id ? new ObjectId(req.params.id) : '';
  const origin_date = new Date().toISOString();
  const due_date = new Date(Date.parse(origin_date) + 2629800000).toISOString();

  let newInvoice = {
    _id: objIdNumb,
    "client": client,
    "address": address,
    "origin_date": origin_date,
    "due_date": due_date,
    "line_items": line_items,
    "notes": notes
  }

  let collection = await db.collection('invoice');
  let result = await collection.insertOne(newInvoice);
  res.send(result).status(204);
})

// Update invoice
router.patch(':/id', async (req, res) => {
  const {
    client,
    address,
    origin_date,
    line_items,
    notes
  } = req.body;

  const due_date = origin_date + 2629800000;

  const query = { _id: new ObjectId(req.params.id) };
  const updates = {
    $set: {
      "client": client,
      "address": address,
      "origin_date": new Date(origin_date),
      "due_date": new Date(due_date),
      "line_items": line_items,
      "notes": notes
    }
  }
  let collection = await db.collection('invoice');
  let result = await collection.updateOne((query, updates))
  res.send(result).status(200)
})

//delete invoice
router.delete(':/id', async (req, res) => {
  const query = { _id: req.params.id };

  const collection = db.collection('invoice');
  let result = await collection.deleteOne(ObjectId(query));

  res.send(result).status(200)
});

export default router;
