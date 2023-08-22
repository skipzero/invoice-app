import './lineItem.css';

export default function LineItem (client) {
  const {handleClient, } = client;

  return (
    <div className="control-group line-item">
      <input type="number" value={client.quantity} handleClient={handleClient} className="form-control quantity" />
      <input type="text" value={client.title} handleClient={handleClient} className="form-control title" placeholder="title"/>
      <input type="text" value={client.desc} handleClient={handleClient} className="form-control desc" placeholder="description" />
      <input type="number" value={client.price} handleClient={handleClient} className="form-control amount" />
      <div className="button-group" >
        <button type="button" className="remove">
          X
        </button>
      </div>
    </div>
  )
}