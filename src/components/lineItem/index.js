import './lineItem.css';

export default function LineItem (client) {
  const {handleClient, } = client;

  return (
    <>
    <div className="control-group line-item">
      <div className="col-md-1">
        quantity
      </div>
      <div className="col-md-3">
        title
      </div>
      <div className="col-md-7">
        description
      </div>
      <div className="col-md-1">
        price
      </div>
    </div>
    <div className="control-group line-item">
      <div className="col-md-1">
        <input type="number" value={client.quantity} handleClient={handleClient} className="form-control quantity" />
      </div>
      <div className="col-md-3" >
        <input type="text" value={client.title} handleClient={handleClient} className="form-control title" placeholder="title"/>
      </div>
      <div className="col-md-6">
        <input type="text" value={client.desc} handleClient={handleClient} className="form-control desc" placeholder="description" />
      </div>
      <div className="col-md-1">
        <input type="number" value={client.price} handleClient={handleClient} className="form-control amount" />
      </div>
      <div className="button-group" >
        <button type="button">
          X
        </button>
      </div>
    </div>
    </>
  )
}
