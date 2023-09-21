import express from "express";
import { getInvoice, getLastInvoice, getInvoices, createInvoice, updateInvoice, deleteInvoice, getInvoiceByClient } from "controllers";

const router = express.Router();

router.get("/api/", getInvoices); // get all invoices
router.get("/api/last", getLastInvoice); // get last invoice
router.post("/api/", createInvoice); // create new invoice
router.get("api//client", getInvoiceByClient); // get all invoices by client
router.get("/api/:id", getInvoice); // get single invoice by ID
router.patch("/api/:id", updateInvoice); // update single invoice by ID
router.delete("/api/:id", deleteInvoice); // delete single invoice by ID
