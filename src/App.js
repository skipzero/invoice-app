import toast, { Toaster } from "react-hot-toast";
import React, { useState, useEffect } from "react";
import InvoiceForm from "./components/form/index.js";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/getLastInvoice");
        const json = await response.json();
        setData(json);
      } catch (error) {
        toast.error(`Error: ${error}`, "icon-error");
      }
    }
  });

  const [lineItems, setLineItems] = useState({
    total: () => {
      return this.items.reduce((acc, item) => {
        return (acc += item.price);
      }, 0);
    },
    items: [
      {
        quantity: 0,
        desc: "",
        price: 0,
      },
    ],
  });

  const [client, setClient] = useState({
    invoice: 1312,
    client: "",
    date: "",
    due: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: "",
    },
    email: "",
    phone: "",
    notes: "",
    lineItems,
  });

  return (
    <div>
      <InvoiceForm client={client} setClient={setClient} lineItem={lineItems} setLineItem={setLineItems} />
    </div>
  );
}

export default App;
