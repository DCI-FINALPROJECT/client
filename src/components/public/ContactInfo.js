import React from 'react'

function ContactInfo() {
  return (
    <div>
      <article className="card mb-4">
                <div className="card-body">
                  <h4 className="card-title mb-4">Contact info</h4>
                  <form action="">
                    <div className="row">
                      <div className="form-group col-sm-6">
                        <label>First name</label>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <label>Last name</label>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="form-control"
                        />
                      </div>
                      <div className="form-group col-sm-6">
                        <label>Phone</label>
                        <input type="text" value="+998" className="form-control" />
                      </div>
                      <div className="form-group col-sm-6">
                        <label>Email</label>
                        <input
                          type="email"
                          placeholder="example@gmail.com"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </article>
    </div>
  )
}

export default ContactInfo