import "./lineItem.css";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";
export default function LineItem(client) {
  const { handleClient, quantity, title, description, price } = client;

  return (
    <MDBRow>
      <MDBCol md="1">
        <label htmlFor="quantity" className="form-label">
          quantity
        </label>
        <input type="number" value={quantity} handleClient={handleClient} id="quantity" className="form-control" />
      </MDBCol>
      <MDBCol md="8">
        <label htmlFor="description" className="form-label">
          description
        </label>
        <input type="text" value={description} handleClient={handleClient} id="description" className="form-control desc" />
      </MDBCol>
      <MDBCol md="2">
        <label htmlFor="price" className="form-label">
          price
        </label>
        <input type="number" value={price} handleClient={handleClient} id="price" className="form-control amount" />
      </MDBCol>
      <MDBCol md="1">
        <button type="button" className="form-control remove">
          X
        </button>
      </MDBCol>
    </MDBRow>
  );
}
