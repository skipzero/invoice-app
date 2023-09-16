import { MDBRow } from "mdb-react-ui-kit";
import LineItem from "../lineItem/index.js";
import "./lineItems.css";

export default function LineItems(lineClient) {
  console.log("LINE+++", lineClient);
  // const { handleClient, lineProps } = lineClient;
  // const { quantity, price, description } = lineProps;
  // console.log("PROPS++", lineProps);

  return (
    <MDBRow>
      <LineItem />
    </MDBRow>
  );
}
