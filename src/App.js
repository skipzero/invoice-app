import React, { useState } from 'react'
import InvoiceForm from './components/form';
import './App.css';

function App() {

  const [client, setClient] = useState({
    clientName: '',
    date: '',
    dueDate: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip: 94610
    },
    email: '',
    phone: ''
  })

  const [lineItem, setLineItem] = useState({
    description: '',
    quantity: 0,
    price: 0,
    notes: ''
  })
  // const initDate = () => new Date().toString().slice(1, 4);

  // setClient(client => ({
  //   ...client,
  //   date: initDate()
  // }))

  return (
    <div>
      App Test
      <InvoiceForm client={client} setClient={setClient} />
    </div>
  );
}

export default App;
