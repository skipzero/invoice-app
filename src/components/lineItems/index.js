import "./lineItem.css";
import { MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function LineItems(lineClient) {
  console.log("LINE+++", lineClient);
  const { handleClient, lineProps } = lineClient;
  const { quantity, price, description } = lineProps;
  console.log("PROPS++", lineProps);

  return (
    <MDBRow>
      <MDBCol md="1">
        <input type="number" value={quantity} handleClient={handleClient} id="quantity" className="form-control" />
        <label htmlFor="quantity" className="form-label">
          quantity
        </label>
      </MDBCol>
      <MDBCol md="8">
        <input type="text" value={description} handleClient={handleClient} id="description" className="form-control desc" />
        <label htmlFor="description" className="form-label">
          description
        </label>
      </MDBCol>
      <MDBCol md="2">
        <input type="number" value={price} handleClient={handleClient} id="price" className="form-control amount" />
        <label htmlFor="price" className="form-label">
          price
        </label>
      </MDBCol>
      <MDBCol md="1">
        <button type="button" className="form-control remove">
          X
        </button>
      </MDBCol>
    </MDBRow>
  );
}
