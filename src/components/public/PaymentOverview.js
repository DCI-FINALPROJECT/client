import React from 'react'

function PaymentOverview() {
  return (
    <div>
              <div className="card shadow">
                <div className="card-body">
                  <h4 className="mb-3">Overview</h4>
                  <dl className="dlist-align">
                    <dt className="text-muted">Delivery:</dt>
                    <dd>Pick-up</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt className="text-muted">Delivery type:</dt>
                    <dd>Standart</dd>
                  </dl>
                  <dl className="dlist-align">
                    <dt className="text-muted">Payment method:</dt>
                    <dd>Cash</dd>
                  </dl>
                  <hr />
                  <dl className="dlist-align">
                    <dt>Total:</dt>
                    <dd className="h5">$300.50</dd>
                  </dl>
                  <hr />
                  <p className="small mb-3 text-muted">
                    By clicking you are agree with terms of condition{" "}
                  </p>
                  <a href="#" className="btn btn-primary btn-block">
                    {" "}
                    Button{" "}
                  </a>
                </div>
              </div>
    </div>
  )
}

export default PaymentOverview