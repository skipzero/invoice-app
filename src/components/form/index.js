import Field from '../field/';
import 'bootstrap/dist/css/bootstrap.css';
import './form.css';

export default function InvoiceForm({ client, setClient }) {
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
      <form method="post" onSubmit={handleSubmit}>
        <div className="form-group client-info">
          <Field fieldName="invoice" handleClient={handleClient} value={client.date}/> 
          <Field fieldName="date" handleClient={handleDate} value={client.due}/>
          <Field fieldName="due" /> 
        </div>
        <div className="form-group client-info" >
          <Field fieldName="client" handleClient={handleClient} value={client.client} />

        </div>
        <div id="customer-lk">

        </div>
      </form>
    </div>
  )
}