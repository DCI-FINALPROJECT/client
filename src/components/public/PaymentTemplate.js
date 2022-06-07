import React from "react";
import PaymentOverview from "./PaymentOverview";
import ContactInfo from "./ContactInfo";
import PaymentMethod from "./PaymentMethod";


function PaymentTemplate() {
  return (
    <div>
      <section className="section-content padding-y bg">
        <div className="container">
          <div className="row">
            <main className="col-md-8">
              <ContactInfo />
              <PaymentMethod />
            </main>
            <aside className="col-md-4">
              <PaymentOverview />
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PaymentTemplate;
