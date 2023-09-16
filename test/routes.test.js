import invoiceModel from '../server/models/index.js'
import { chai, expect } from 'chai'

describe('invoiceModel', () => {
  it('should be able to create a new instance', () => {
    const model = new invoiceModel()
    chai.expect(model).to.be.an.instanceOf(invoiceModel)
  })

  it('should be able to save itself', () => {
    const model = new invoiceModel()
    model.save()
    chai.expect(model).to.be.saved()
  })
})
