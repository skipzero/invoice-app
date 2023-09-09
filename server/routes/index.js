import express from "express";
import { getInvoice, getInvoices, createInvoice, updateInvoice, deleteInvoice, getInvoiceByClient } from "controllers";

const router = express.Router();

router.get("/:id", getInvoice);
router.get("/", getInvoices);
router.get("/client", getInvoiceByClient);
router.post("/", createInvoice);
router.patch("/:id", updateInvoice);
router.delete("/:id", deleteInvoice);
