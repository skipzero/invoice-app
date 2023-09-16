import { connectToCluster } from "./db/index.js";

export async function executeInvoiceOperations() {
  const uri = process.env.DB_URI;
  let mongoClient;

  try {
    mongoClient = await connectToCluster(uri);
    const db = mongoClient.db("FSClusterZed");
    const collection = db.collection("invoice");

    await createInvoiceDocument(collection);
  } finally {
    await mongoClient.close();
  }
}

export async function getLastInvoice(collection) {
  return collection.find().sort({ _id: -1 }).limit(1);
}

export async function findInvoiceByClient(collection, client) {
  return collection.find({ client }).toArray();
}

export async function createInvoiceDocument(collection) {
  const lastInvoiceNo = getLastInvoice(collection)[0].invoice;
  const invoiceNo = lastInvoiceNo + 1;
  const invoiceDocument = {
    invoice: {
      $numberInt: invoiceNo,
    },

    origin_date: {
      $date: {
        $numberLong: "1690527600000",
      },
    },
    due_date: {
      $date: {
        $numberLong: "1693119600000",
      },
    },
    client: "Sample",
    address: {
      street: "888 warfield",
      city: "oakland",
      state: "ca",
      zip: "94612",
      email: "skip@zerobunny.com",
      phone: "510-223-2244",
    },
    line_items: [
      {
        id: {
          $numberInt: "1",
        },
        quantity: {
          $numberInt: "4",
        },
        item: "line item name",
        description: "a little description about the item...",
        price: {
          $numberDouble: "12.5",
        },
      },
      {
        id: {
          $numberInt: "2",
        },
        item: "hours",
        quantity: {
          $numberInt: "40",
        },
        price: {
          $numberInt: "66",
        },
      },
    ],
    notes: "invoice notes for customer/description of work or whatnot...",
  };
  await collection.insertOne(invoiceDocument);
}
