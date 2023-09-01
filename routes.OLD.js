// invoice.test.js
const sinon = require("sinon");
const proxyquire = require("proxyquire");
const { expect } = require("chai");

describe("getInvoiceByUser", () => {
  let getInvoiceByUser;
  let mockFind;
  let req;
  let res;

  beforeEach(() => {
    const invoiceModel = {
      find: sinon.stub(),
      findById: sinon.stub(),
    };

    mockFind = sinon.stub();
    getInvoiceByUser = proxyquire("./invoice", {
      "../server/models": invoiceModel,
    }).getInvoiceByUser;

    req = {
      query: {
        userQuery: "testUser",
      },
      params: {
        id: "testId",
      },
      body: {
        /*** Body code here */
      },
    };
    res = {
      status: sinon.stub().returnsThis(),
      json: sinon.spy(),
    };
  });

  it("returns invoices for the given user", async () => {
    mockFind.resolves(["invoice1", "invoice2"]);

    await getInvoiceByUser(req, res);

    expect(res.status.calledWith(200)).to.be.true;
    expect(res.json.calledWith({ data: ["invoice1", "invoice2"] })).to.be.true;
  });

  it("returns error message when an error occurs", async () => {
    const errorMessage = "Error occurred";
    mockFind.rejects(new Error(errorMessage));

    await getInvoiceByUser(req, res);

    expect(res.status.calledWith(404)).to.be.true;
    expect(res.json.calledWith({ message: errorMessage })).to.be.true;
  });
});
