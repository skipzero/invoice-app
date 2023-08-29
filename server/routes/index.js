import express from 'express';
import {
  getInvoice,
  getInvoices,
  createInvoice,
  updateInvoice,
  deleteInvoice,
  getInvoiceByUser
} from 'controllers';

const router = express.Router();

router.get('/:id', getInvoice);
router.get('/', getInvoices);
router.get('/', getInvoiceByUser);
router.post('/', createInvoice);
router.patch('/:id', updateInvoice);
router.delete('/:id', deleteInvoice);
