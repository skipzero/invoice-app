import express from "express";
import { getInvoice, getInvoices, createInvoice, updateInvoice, deleteInvoice, getInvoiceByClient } from "controllers";

const router = express.Router();

router.get("/", getInvoices); // get all invoices
router.post("/", createInvoice); // create new invoice
router.get("/client", getInvoiceByClient); // get all invoices by client
router.get("/:id", getInvoice); // get single invoice by ID
router.patch("/:id", updateInvoice); // update single invoice by ID
router.delete("/:id", deleteInvoice); // delete single invoice by ID
