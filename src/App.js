import toast, { Toaster } from "react-hot-toast";
import React, { useState, useEffect } from "react";
import InvoiceForm from "./components/form/index.js";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const url = "/getLastInvoice";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      } catch (error) {
        toast.error(`Error: ${error}`, "icon-error");
      }
    };
    fetchData().then(() => {
      console.log("Second fetcher thing....", data);
    });
  }, [data]);
  console.log("LastInvoice....", data);
  const [lineItem, setLineItem] = useState({
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
    lineItem,
  });

  return (
    <div>
      <Toaster />
      <InvoiceForm client={client} setClient={setClient} lineItem={lineItem} setLineItem={setLineItem} />
    </div>
  );
}

export default App;
