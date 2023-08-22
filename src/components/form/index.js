import Field from '../field/';
import LineItem from '../lineItem/';
import 'bootstrap/dist/css/bootstrap.css';
import './form.css';

export default function InvoiceForm({ client, setClient, lineItem, setLineItem }) {
  console.log('event-form', client)

  const handleClient = (evt) => {
    console.log('EVENT', evt)
    const cField = evt.target.name
    setClient(client => ({
      ...client,
      [cField]: evt.target.value
    }))
  }

  const handleDate = (evt) => {
    // evt.preventDefault()
    const today = new Date(evt.target.value);
    const future = today.getDate() + 30;
    const due = today.setDate(future)

    setClient(client => ({
      ...client,
      date: today,
      due: due
    }))
  }
  const handleSubmit = () => {

  }

  return (
    <div className="wrapper">
      <h1>Invoice</h1>
      <form method="post" onSubmit={handleSubmit} className="form-vertical">
        <div className="control-group client-info">
          <Field fieldName="invoice" handleClient={handleClient} value={client.invoice}/> 
          <input type="date" htmlName="date" onChange={handleDate} value={client.date}/>
          <Field fieldName="due" value={client.due} /> 
        </div>
        <div className="control-group client-info" >
          <div className="client form-group" >
            <Field fieldName="client" handleClient={handleClient} value={client.client} />
            <Field fieldName="email" handleClient={handleClient} value={client.email} />
          </div>
          <div className="control-group address">
            <Field fieldName="street" handleClient={handleClient} value={client.street} />
            <Field fieldName="city" handleClient={handleClient} value={client.city} />
            <Field fieldName="state" handleClient={handleClient} value={client.state} />
            <Field fieldName="zip" handleClient={handleClient} value={client.zip} />
          </div>
        </div>
        <div className="control-group line-item">
          <LineItem 
            handleClient={handleClient} 
            title="title" 
            desc="desc" 
            quantity="quantity" 
            price="price" 
          />
        </div>
        <div id="customer-lk">

        </div>
      </form>
    </div>
  )
}