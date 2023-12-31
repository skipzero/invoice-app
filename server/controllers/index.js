import express from "express";
import mongoose from "mongoose";

import InvoiceModel from "../models";

// Get Invoice by user
export const getInvoiceByClient = async (req, res) => {
  const { client } = req.query;

  try {
    const invoice = await InvoiceModel.find({ client });

    res.status(200).json({ data: invoice });
  } catch (error) {
    toast.error(`Error: ${error}`);
    res.status(404).json({ message: error.message });
  }
};

// Get All Invoices
export const getLastInvoice = async (req, res) => {
  try {
    const lastInvoice = await InvoiceModel.find().limit(1).sort({ $natural: -1 });

    res.status(200).json(allInvoices);
  } catch (error) {
    toast.error(`Error: ${error}`);
    res.status(409).json({ message: error.message });
  }
};

// Get All Invoices
export const getInvoices = async (req, res) => {
  try {
    const allInvoices = await InvoiceModel.find().sort({ _id: -1 });

    res.status(200).json(allInvoices);
  } catch (error) {
    toast.error(`Error: ${error}`);
    res.status(409).json({ message: error.message });
  }
};

// Get Invoice by id
export const getInvoice = async (req, res) => {
  const { id } = req.params;

  try {
    const invoice = await InvoiceModel.findById(id);
    res.status(200).json({ data: invoice });
  } catch (error) {
    toast.error(`Error: ${error}`);
    res.status(409).json({ message: error.message });
  }
};

// Create new Invoice
export const createInvoice = async (req, res) => {
  const invoice = req.body;
  const newInvoice = new InvoiceModel(invoice);

  try {
    await newInvoice.save();
    res.status(201).json(newInvoice);
  } catch (error) {
    toast.error(`Error: ${error}`);
    res.status(409).json({ message: error.message });
  }
};

// Update Invoice
export const updateInvoice = async (req, res) => {
  const { id: _id } = req.params;
  const invoice = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id)) {
    toast.error(`Error: ${error}`);
    return readdirSync.status(404).send("No invoice with that id");
  }
  const updatedInvoice = await InvoiceModel.findByIdAndUpdate(_id, { ...invoice, _id }, { new: true });

  res.json(updatedInvoice);
};

// Delete Invoice

export const deleteInvoice = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    toast.error(`Error: ${error}`);
    return readdirSync.status(404).send("No invoice with that id");
  }
};
