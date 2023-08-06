import './form.css';

export default function InvoiceForm(props) {
  console.log('event', props)
  const { client, setClient } = props;

  const handleClient = (evt) => {
    console.log('EVENT', evt)
    const cField = evt.target.name
    setClient(client => ({
      ...client,
      [cField]: evt.target.value
    }))
  }

  const handleDate = (evt) => {
    evt.preventDefault()
    const initDate = evt.target.value;
    setClient(client => ({
      ...client,
      date: initDate,
      dueDate: new Date(new Date('2023-12-31').getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    }))
  }

  const handleSubmit = () => {

  }

  return (
    <div className="wrapper">
      <h1>Invoice</h1>
      <form method="post" onSubmit={handleSubmit}>
        <div className="form-group client-info">
          <label htmlFor='invoice'>
            <input type="invoiceNo" read-only id="invoice" />
          </label>
          <label htmlFor="date">
            <span>Date</span>
            <input type="date" name="date" onChange={handleDate} value={client.date} />
          </label>
          <label htmlFor="dueDate">
            <span>DueDate</span>
            <input type="dueDate" name="dueDate" onChange={handleDate} value={client.dueDate} />
          </label>
        </div>
        <div className="form-group client-info" >
          <label htmlFor="clientName">
            <span>Client</span>
            <input type="text" name="clientName" onChange={handleClient} value={client.name} />
          </label>
          <label htmlFor="email">
            <span>Email</span>
            <input type="email" name="email" onChange={handleClient} value={client.email} />
          </label>
        </div>
        <div id="customer-lk">

        </div>
      </form>
    </div>
  )
}