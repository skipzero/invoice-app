import  mongoose from 'mongoose';

    const InvoiceSchema = mongoose.Schema({
      "invoice": String,
      "origin_date": Date,
      "due_date": Date,
      "client": String,
      "address": {
        "email": String,
        "phone": String,
        "street": String,
        "city": String,
        "state": String,
        "zip": String
      },
      "line_items": [
        {
          "item": String,
          "quantity": Number,
          "price": Number
        }
      ],
      "total": Number,
      "notes": String,
      "status": String
    })


const InvoiceModel = mongoose.model('InvoiceModel', InvoiceSchema);
export default InvoiceModel;
