import React, { useState, useEffect } from "react";
import InvoiceForm from "./components/form/index.js";

import "./App.css";

function App() {
  useEffect(() => {
    const fetchData = async () => {};
  });

  const [lineItems, setLineItems] = useState({
    total: () => {
      return this.items.reduce((acc, item, index) => {
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
      App Test
      <InvoiceForm client={client} setClient={setClient} lineItem={lineItems} setLineItem={setLineItems} />
    </div>
  );
}

export default App;
