import express from 'express';
import request from 'supertest'; // Supertest helps simulate HTTP requests
import { ObjectId } from 'mongodb'; // Make sure to import ObjectId
import {expect} from 'expect';

// const expect = chai.expect;

import dotenv from 'dotenv';
dotenv.config();

// Import your router and any other dependencies here
import router from '../server/routes/invoices.js'; // Update with the actual path

const app = express();
app.use(express.json());
app.use('/', router); // Mount your router on the app

// Now let's start writing test cases
describe('Invoice API', () => {
  it('should retrieve a list of invoices', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Array);
  });

  it('should retrieve a single invoice', async () => {
    const response = await request(app).get('64ecaa05ae06b38cdad30916'); // Provide a valid ObjectId here
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('_id');
  });

  it('should handle a non-existing single invoice', async () => {
    const response = await request(app).get('64eca9d47a7e8135f228e68d'); // Provide an ObjectId that doesn't exist
    expect(response.status).toBe(404);
    expect(response.text).toBe('Not Found');
  });

  it('should create a new invoice', async () => {
    const newInvoice = {
        "_id": new ObjectId('64eca9d47a7e8135f228e68d'),
        "invoice": 231,
        "origin_date": {
          "$date": "2023-07-28T07:00:00Z"
        },
        "due_date": {
          "$date": "2023-08-27T07:00:00Z"
        },
        "client": "Sample",
        "address": {
          "street": "888 warfield",
          "city": "oakland",
          "state": "ca",
          "zip": "94612"
        },
        "line_items": [
          {
            "id": 1,
            "quantity": 4,
            "item": "line item name",
            "description": "a little description about the item...",
            "price": 12.5
          },
          {
            "id": 2,
            "item": "hours",
            "quantity": 40,
            "price": 66
          }
        ],
        "notes": "invoice notes for customer/description of work or whatnot..."
      }


    const response = await request(app).post('/').send(newInvoice);
    expect(response.status).toBe(200);
  });

  it('should update an existing invoice', async () => {
    const updatedInvoice = {
      // Provide properties to update an invoice
      "client":"New Sample Client"
    };

    const response = await request(app)
      .patch('64c36d1af8320730b79abd36') // Provide a valid ObjectId here
      .send(updatedInvoice);

    expect(response.status).toBe(200);
  });

  it('should delete an existing invoice', async () => {
    const response = await request(app)
      .delete('64eca9d47a7e8135f228e68d') // Provide a valid ObjectId here
      .send();

    expect(response.status).toBe(200);
  });
});
