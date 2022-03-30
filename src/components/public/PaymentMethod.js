import React from "react";

function PaymentMethod() {
  return (
    <div>
              <article className="accordion" id="accordion_pay">
                <div className="card">
                <h4 className="card-title mb-4 mt-4">Payment Method</h4>
                  <header className="card-header d-flex justify-content-between">
                    <label
                      className="form-check collapsed"
                      data-toggle="collapse"
                      data-target="#pay_paynet"
                    >
                      <input
                        className="form-check-input d-flex"
                        name="payment-option"
                        checked
                        type="radio"
                        value="option2"
                      />
                      <h6 className="form-check-label">Paypal</h6>
                    </label>
                    <img
                      src="../images/misc/payment-paypal.png"
                      className="float-right"
                      height="24"
                    />
                  </header>
                  <div
                    id="pay_paynet"
                    className="collapse show"
                    data-parent="#accordion_pay"
                  >
                    <div className="card-body">
                      <p className="text-center text-muted">
                        Connect your PayPal account and use it to pay your
                        bills. You'll be redirected to PayPal to add your
                        billing information.
                      </p>
                      <p className="text-center">
                        <a href="#">
                          <img
                            src="../images/misc/btn-paypal.png"
                            height="32"
                          />
                        </a>
                        <br />
                        <br />
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <header className="card-header d-flex justify-content-between">
                    <label
                      className="form-check"
                      data-toggle="collapse"
                      data-target="#pay_payme"
                    >
                      <input
                        className="form-check-input d-flex"
                        name="payment-option"
                        type="radio"
                        value="option2"
                      />
                      <h6 className="form-check-label"> Credit Card </h6>
                    </label>
                    <img
                      src="../images/misc/payment-card.png"
                      className="float-right"
                      height="24"
                    />
                  </header>
                  <div
                    id="pay_payme"
                    className="collapse"
                    data-parent="#accordion_pay"
                  >
                    <div className="card-body">
                      <p className="alert alert-success">
                        Some information or instruction
                      </p>
                      <form className="form-inline">
                        <input
                          type="text"
                          className="form-control mr-2"
                          placeholder="xxxx-xxxx-xxxx-xxxx"
                          name=""
                        />
                        <input
                          type="text"
                          className="form-control mr-2"
                          style={{width: "100px"}}
                          placeholder="dd/yy"
                          name=""
                        />
                        <input
                          type="number"
                          maxlength="3"
                          className="form-control mr-2"
                          style={{width: "100px"}}
                          placeholder="cvc"
                          name=""
                        />
                        <button className="btn btn btn-success">Button</button>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <header className="card-header d-flex justify-content-between">
                    <label
                      className="form-check"
                      data-toggle="collapse"
                      data-target="#pay_card"
                    >
                      <input
                        className="form-check-input d-flex"
                        name="payment-option"
                        type="radio"
                        value="option1"
                      />
                      <h6 className="form-check-label"> Bank Transfer </h6>
                      
                    </label>
                    <img
                      src="../images/misc/payment-bank.png"
                      className="float-right"
                      height="24"
                    />
                  </header>
                  <div
                    id="pay_card"
                    className="collapse"
                    data-parent="#accordion_pay"
                  >
                    <div className="card-body">
                      <p className="text-muted">
                        Some instructions about how to pay{" "}
                      </p>
                      <p>
                        Bank of America, Account number: 12345678912346 <br />
                        IBAN: 12345, SWIFT: 987654
                      </p>
                    </div>
                  </div>
                </div>
              </article>
    </div>
  );
}

export default PaymentMethod;
