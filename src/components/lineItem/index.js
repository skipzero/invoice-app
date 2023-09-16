import { MDBCol } from 'mdb-react-ui-kit'

import './lineItem.css'

const LineItem = (lineClient) => {
  const { description, quantity, price, handleClient } = lineClient
  return (
    <>
      <MDBCol md='1'>
        <input type='number' value={quantity} handleClient={handleClient} id='quantity' className='form-control quantity' />
        <label htmlFor='quantity' className='form-label'>
          quantity
        </label>
      </MDBCol>
      <MDBCol md='8'>
        <input type='text' value={description} handleClient={handleClient} id='description' className='form-control desc' />
        <label htmlFor='description' className='form-label'>
          description
        </label>
      </MDBCol>
      <MDBCol md='2'>
        <input type='number' value={price} handleClient={handleClient} id='price' className='form-control amount' />
        <label htmlFor='price' className='form-label'>
          price
        </label>
      </MDBCol>
      <MDBCol md='1'>
        <button type='button' className='form-control remove'>
          X
        </button>
      </MDBCol>
    </>
  )
}

export default LineItem
