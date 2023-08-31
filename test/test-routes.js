import request from 'supertest';
import express from 'express';
import mongoose from 'mongoose';
import { describe, it, beforeEach, afterEach } from 'mocha';
import { expect } from 'chai';
import sinon from 'sinon';
import sinonMongoose from 'sinon-mongoose';
import InvoiceModel from '../server/models/index.js'; // Make sure to import your model here

const app = express();

// ... Initialize and configure your app and middleware ...

describe('Invoice API endpoints', () => {
  let invoiceStub;

  beforeEach(() => {
    invoiceStub = sinon.stub(InvoiceModel, 'find');
  });

  afterEach(() => {
    invoiceStub.restore();
  });

  describe('GET /invoices', () => {
    it('should retrieve all invoices', async () => {
      const fakeInvoices = [{ /* ... */ }, { /* ... */ }];
      invoiceStub.returns(sinonMongoose.promise.returns(fakeInvoices));

      const response = await request(app).get('/invoices');
      expect(response.status).to.equal(200);
      expect(response.body).to.be.an('array');
      expect(response.body).to.deep.equal(fakeInvoices);
    });
  });

  // ... Add more test cases for other endpoints ...
});
