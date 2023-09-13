import Field from "../field/index.js";
import LineItem from "../lineItems/index.js";
import toast, { Toaster } from "react-hot-toast";
import { MDBRow, MDBCol, MDBContainer } from "mdb-react-ui-kit";
import "./form.css";

export default function InvoiceForm({ client, setClient, lineItems, setLineItems }) {
  console.log("event-form", client);

  const handleClient = (evt) => {
    console.log("EVENT", evt);
    const cField = evt.target.name;
    setClient((client) => ({
      ...client,
      [cField]: evt.target.value,
    }));
  };
  const notify = () => {
    toast.success("this ia a toast message", "icon-success");
  };

  const handleLineItem = (evt) => {
    // const {}
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
  const handleSubmit = (e) => {
    e.preventDefault();
    notify();
  };

  return (
    <MDBContainer>
      <MDBCol md="12">
        <MDBRow className="header center-text">
          <span>Invoice</span>
        </MDBRow>
        <form method="post" onSubmit={handleSubmit} className="form-vertical">
          <Toaster
            toastOptions={{
              style: {
                fontSize: "2.4rem",
                fontWeight: "bold",
              },
            }}
          />
          <MDBRow>
            <MDBCol md="1">
              <Field fieldName="invoice" handleClient={handleClient} value={client.invoice} />
            </MDBCol>
            <MDBCol md="9"></MDBCol>
            <MDBCol md="1" className="ms-auto">
              <Field fieldName="date" onChange={handleDate} value={client.date} />
            </MDBCol>
            <MDBCol md="1" className="ms-auto">
              <Field fieldName="due" value={client.due} />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="4">
              <Field fieldName="client" handleClient={handleClient} value={client.client} />
            </MDBCol>
            <MDBCol md="4">
              <Field fieldName="email" handleClient={handleClient} value={client.email} />
            </MDBCol>
            <MDBCol md="4">
              <Field fieldName="tel" handleClient={handleClient} value={client.phone} />
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <div className="control-group address row">
              <Field fieldName="street" handleClient={handleClient} value={client.street} />
              <MDBCol md="6">
                <Field fieldName="city" handleClient={handleClient} value={client.city} />
              </MDBCol>
              <MDBCol md="4">
                <Field fieldName="state" handleClient={handleClient} value={client.state} />
              </MDBCol>
              <MDBCol md="2">
                <Field fieldName="zip" handleClient={handleClient} value={client.zip} />
              </MDBCol>
            </div>
          </MDBRow>
          <MDBRow>
            <LineItems />
          </MDBRow>
          <div id="customer-lk">
            <button value="Add Item"></button>
          </div>
        </form>
      </MDBCol>
    </MDBContainer>
  );
}
