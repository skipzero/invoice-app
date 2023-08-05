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
    const url = mongoDB.db
  }

  return (
    <div className="wrapper">
      <h1>Invoice</h1>
      <form method="post" onSubmit={handleSubmit}>
        <div className="form-group client-info">
          <label for={invoice}>
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

      </form>
    </div>
  )



  // <div className="invoiceApp stack-large">
  //   <h1>Invoice App</h1>
  //   <form>
  //     <h2 className="label-wrapper">
  //       <label htmlFor="new-todo-input" className="label__lg">
  //         What needs to be done?
  //       </label>
  //     </h2>
  //     <input
  //       type="text"
  //       id="new-todo-input"
  //       className="input input__lg"
  //       name="text"
  //       autoComplete="off"
  //     />
  //     <button type="submit" className="btn btn__primary btn__lg">
  //       Add
  //     </button>
  //   </form>
  //   <div className="filters btn-group stack-exception">
  //     <button type="button" className="btn toggle-btn" aria-pressed="true">
  //       <span className="visually-hidden">Show </span>
  //       <span>all</span>
  //       <span className="visually-hidden"> tasks</span>
  //     </button>
  //     <button type="button" className="btn toggle-btn" aria-pressed="false">
  //       <span className="visually-hidden">Show </span>
  //       <span>Active</span>
  //       <span className="visually-hidden"> tasks</span>
  //     </button>
  //     <button type="button" className="btn toggle-btn" aria-pressed="false">
  //       <span className="visually-hidden">Show </span>
  //       <span>Completed</span>
  //       <span className="visually-hidden"> tasks</span>
  //     </button>
  //   </div>
  //   <h2 id="list-heading">3 tasks remaining</h2>
  //   <ul
  //     role="list"
  //     className="todo-list stack-large stack-exception"
  //     aria-labelledby="list-heading">
  //     <li className="todo stack-small">
  //       <div className="c-cb">
  //         <input id="todo-0" type="checkbox" defaultChecked={true} />
  //         <label className="todo-label" htmlFor="todo-0">
  //           Eat
  //         </label>
  //       </div>
  //       <div className="btn-group">
  //         <button type="button" className="btn">
  //           Edit <span className="visually-hidden">Eat</span>
  //         </button>
  //         <button type="button" className="btn btn__danger">
  //           Delete <span className="visually-hidden">Eat</span>
  //         </button>
  //       </div>
  //     </li>
  //     <li className="todo stack-small">
  //       <div className="c-cb">
  //         <input id="todo-1" type="checkbox" />
  //         <label className="todo-label" htmlFor="todo-1">
  //           Sleep
  //         </label>
  //       </div>
  //       <div className="btn-group">
  //         <button type="button" className="btn">
  //           Edit <span className="visually-hidden">Sleep</span>
  //         </button>
  //         <button type="button" className="btn btn__danger">
  //           Delete <span className="visually-hidden">Sleep</span>
  //         </button>
  //       </div>
  //     </li>
  //     <li className="todo stack-small">
  //       <div className="c-cb">
  //         <input id="todo-2" type="checkbox" />
  //         <label className="todo-label" htmlFor="todo-2">
  //           Repeat
  //         </label>
  //       </div>
  //       <div className="btn-group">
  //         <button type="button" className="btn">
  //           Edit <span className="visually-hidden">Repeat</span>
  //         </button>
  //         <button type="button" className="btn btn__danger">
  //           Delete <span className="visually-hidden">Repeat</span>
  //         </button>
  //       </div>
  //     </li>
  //   </ul>
  // </div>
}