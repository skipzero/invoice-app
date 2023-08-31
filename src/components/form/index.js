import Field from "../field/index.js";
import LineItem from "../lineItem/index.js";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import "./form.css";

export default function InvoiceForm({ client, setClient, lineItem, setLineItem }) {
  console.log("event-form", client);

  const handleClient = (evt) => {
    console.log("EVENT", evt);
    const cField = evt.target.name;
    setClient((client) => ({
      ...client,
      [cField]: evt.target.value,
    }));
  };

  const handleDate = (evt) => {
    // evt.preventDefault()
    const today = new Date(evt.target.value);
    const future = today.getDate() + 30;
    const due = today.setDate(future);

    setClient((client) => ({
      ...client,
      date: today,
      due: due,
    }));
  };
  const handleSubmit = () => {};

  return (
    <MDBContainer>
      <MDBCol md="12">
        <MDBRow className="header center-text">
          <span>Invoice</span>
        </MDBRow>
        <form method="post" onSubmit={handleSubmit} className="form-vertical">
          <MDBRow>
            <MDBCol md="1">
              <Field fieldName="invoice" handleClient={handleClient} value={client.invoice} />
            </MDBCol>
            <MDBCol md="1" className="ms-auto">
              <Field fieldName="date" onChange={handleDate} value={client.date} />
              <Field fieldName="due" value={client.due} />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="8">
              <Field fieldName="client" handleClient={handleClient} value={client.client} />
            </MDBCol>
            <MDBCol md="4">
              <Field fieldName="email" handleClient={handleClient} value={client.email} />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <div className="control-group address row">
              <Field fieldName="street" handleClient={handleClient} value={client.street} />
              <Field fieldName="city" handleClient={handleClient} value={client.city} />
              <Field fieldName="state" handleClient={handleClient} value={client.state} />
              <Field fieldName="zip" handleClient={handleClient} value={client.zip} />
            </div>
          </MDBRow>
          <MDBRow>
            <LineItem handleClient={handleClient} title="title" desc="description" quantity="quantity" price="price" />
          </MDBRow>
          <div id="customer-lk"></div>
        </form>
      </MDBCol>
    </MDBContainer>
  );
}
