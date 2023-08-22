import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Create() {
  const [form, setForm] = useState({})


  const navigate = useNavigate();

  function updateForm(val) {
    return setForm(prev => {
      return { ...prev, ...val }
    })
  }
}

async function onSubmit(e) {
  e.preventDefault();

  const newInvoice = { ...form };

  await fetch('http://localhost:5150/invoice', {
    method: 'POST',
    headera: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(invoice)
  })
    .catch(err => {
      console.error(`ERROR: ${err}`)
    });

  resetForm();
  navigate('/')
}