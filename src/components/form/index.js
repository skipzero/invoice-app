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
    const initDate = evt.target.value;
    setClient(client => ({
      ...client,
      date: initDate,
      due: new Date(new Date(client.date).getTime() + 2629800000).toISOString().split('T')[0]
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
          <Field fieldName="date" handleClient={handleDate} value={client.due}/>
          <Field fieldName="due" /> 
        </div>
        <div className="control-group client-info" >
          <div className="client form-group" >
            <Field fieldName="client" handleClient={handleClient} value={client.client} />
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