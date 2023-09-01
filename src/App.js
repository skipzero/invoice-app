import React, { useState, useEffect } from "react";
import InvoiceForm from "./components/form/index.js";

import "./App.css";

function App() {
  useEffect(() => {
    const fetchData = async () => {};
  });

  const [client, setClient] = useState({
    invoice: 1312,
    clientName: "",
    date: "",
    due: "",
    address: {
      street: "",
      city: "",
      state: "",
      zip: 94610,
    },
    email: "",
    phone: "",
    notes: "",
  });

  const [lineItem, setLineItem] = useState({
    quantity: 0,
    desc: "",
    price: 0,
  });

  return (
    <div>
      App Test
      <InvoiceForm client={client} setClient={setClient} lineItem={lineItem} setLineItem={setLineItem} />
    </div>
  );
}

export default App;
