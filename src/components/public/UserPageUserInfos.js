import React, { useState, useContext } from "react";
import { DataStore } from "../../DataStore";

function UserPageUserInfos() {
  const { user } = useContext(DataStore);

  const [inputAmendment, setInputAmendment] = useState(false);

  const isInputChanged = () => {
    setInputAmendment(true);
  };

  const updateInfos = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/updateuser", {
      method: "PATCH",
      body: JSON.stringify({
        id: user._id,
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        address: e.target.address.value,
        phone: e.target.phone.value,
        birthday: e.target.birthday.value,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((data) => data.json())
      .then((json) => setInputAmendment(false));
  };

  return (
    <div class="col-lg-9">
      <div class="card-body">
        <form onSubmit={updateInfos}>
          <div class="row">
            <div class="col-lg-8">
              <div class="row gx-3">
                <div class="col-6 mb-3">
                  <label class="form-label">First name</label>
                  <input
                    onChange={isInputChanged}
                    name="firstName"
                    class="form-control"
                    type="text"
                    placeholder="Type here"
                    defaultValue={user.firstName}
                  />
                </div>
                <div class="col-6 mb-3">
                  <label class="form-label">Last name</label>
                  <input
                    onChange={isInputChanged}
                    name="lastName"
                    class="form-control"
                    type="text"
                    placeholder="Type here"
                    defaultValue={user.lastName}
                  />
                </div>
                <div class="col-lg-6 col-md-6 mb-3">
                  <label class="form-label">Email</label>
                  <input
                    onChange={isInputChanged}
                    class="form-control"
                    type="email"
                    placeholder="example@mail.com"
                    defaultValue={user.email}
                  />
                </div>
                <div class="col-lg-6 col-md-6 mb-3">
                  <label class="form-label">Phone</label>
                  <input
                    onChange={isInputChanged}
                    name="phone"
                    class="form-control"
                    type="tel"
                    placeholder="+1234567890"
                    defaultValue={user.phone}
                  />
                </div>
                <div class="col-lg-12 mb-3">
                  <label class="form-label">Address</label>
                  <input
                    onChange={isInputChanged}
                    name="address"
                    class="form-control"
                    type="text"
                    placeholder="Type here"
                    defaultValue={user.address}
                  />
                </div>
                <div class="col-lg-6 col-6 mb-3">
                  <label class="form-label">Birthday</label>
                  <input name="birthday" onChange={isInputChanged} class="form-control" type="date" defaultValue={user.birthday} />
                </div>
              </div>
            </div>
            <aside class="col-lg-4">
              <div class="text-lg-center mt-3">
                <img
                  class="img-lg mb-3 img-avatar rounded"
                  src={user.photo}
                  alt="User Photo"
                  style={{ width: "100px", height: "100px" }}
                />
                <div>
                  <a class="btn btn-sm btn-light" href="#">
                    <i class="fa fa-camera"></i> Upload
                  </a>
                  <a class="btn btn-sm btn-outline-danger" href="#">
                    <i class="fa fa-trash"></i>
                  </a>
                </div>
              </div>
            </aside>
          </div>
          <br />
          <button class="btn btn-primary" type="submit">
            {inputAmendment === true && "Save changes"}
            {inputAmendment === false && "Updated"}
          </button>
        </form>
        <hr class="my-4" />
        <div class="row" style={{ maxWidth: "920px" }}>
          <div class="col-md">
            <article class="box mb-3 bg-light">
              <a class="btn float-end btn-light btn-sm" href="#">
                Change
              </a>
              <p class="title mb-0">Password</p>
              <small class="text-muted d-block" style={{ width: "70%" }}>
                You can reset or change your password by clicking here
              </small>
            </article>
          </div>
          <div class="col-md">
            <article class="box mb-3 bg-light">
              <a class="btn float-end btn-outline-danger btn-sm" href="#">
                Deactivate
              </a>
              <p class="title mb-0">Remove account</p>
              <small class="text-muted d-block" style={{ width: "70%" }}>
                Once you delete your account, there is no going back.
              </small>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPageUserInfos;
