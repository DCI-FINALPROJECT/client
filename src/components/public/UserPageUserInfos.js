import React, { useState, useContext } from "react";
import { DataStore } from "../../DataStore";
import AskPassChangeOrDelete from "./AskPassChangeOrDelete";
import PassportChange from "./PassportChange";

function UserPageUserInfos() {
  const { user } = useContext(DataStore);

  const [inputAmendment, setInputAmendment] = useState(false);
  const [IsPassChangeAktiv, setIsPassChangeAktiv] = useState(false)

  const isInputChanged = () => {
    setInputAmendment(true);
  };

  const updateInfos = (e) => {
    e.preventDefault();

    fetch("https://smartshopdcifinal.herokuapp.com/updateuser", {
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
    <div className="col-lg-9">
      <div className="card-body">
        <form onSubmit={updateInfos}>
          <div className="row">
            <div className="col-lg-8">
              <div className="row gx-3">
                <div className="col-6 mb-3">
                  <label className="form-label">First name</label>
                  <input
                    onChange={isInputChanged}
                    name="firstName"
                    className="form-control"
                    type="text"
                    placeholder="Type here"
                    defaultValue={user.firstName}
                  />
                </div>
                <div className="col-6 mb-3">
                  <label className="form-label">Last name</label>
                  <input
                    onChange={isInputChanged}
                    name="lastName"
                    className="form-control"
                    type="text"
                    placeholder="Type here"
                    defaultValue={user.lastName}
                  />
                </div>
                <div className="col-lg-6 col-md-6 mb-3">
                  <label className="form-label">Email</label>
                  <input
                    onChange={isInputChanged}
                    className="form-control"
                    type="email"
                    placeholder="example@mail.com"
                    defaultValue={user.email}
                  />
                </div>
                <div className="col-lg-6 col-md-6 mb-3">
                  <label className="form-label">Phone</label>
                  <input
                    onChange={isInputChanged}
                    name="phone"
                    className="form-control"
                    type="tel"
                    placeholder="+1234567890"
                    defaultValue={user.phone}
                  />
                </div>
                <div className="col-lg-12 mb-3">
                  <label className="form-label">Address</label>
                  <input
                    onChange={isInputChanged}
                    name="address"
                    className="form-control"
                    type="text"
                    placeholder="Type here"
                    defaultValue={user.address}
                  />
                </div>
                <div className="col-lg-6 col-6 mb-3">
                  <label className="form-label">Birthday</label>
                  <input name="birthday" onChange={isInputChanged} className="form-control" type="date" defaultValue={user.birthday} />
                </div>
              </div>
            </div>
            <aside className="col-lg-4">
              <div className="text-lg-center mt-3">
                <img
                  className="img-lg mb-3 img-avatar rounded"
                  src={user.photo}
                  alt="User Photo"
                  style={{ width: "100px", height: "100px" }}
                />
                <div>
                  <a className="btn btn-sm btn-light" href="#">
                    <i className="fa fa-camera"></i> Upload
                  </a>
                  
                </div>
              </div>
            </aside>
          </div>
          <br />
          <button className="btn btn-primary" type="submit">
            {inputAmendment === true && "Save changes"}       
            {inputAmendment === false && "Updated"}
          </button>
        </form>
        <hr className="my-4" />

        {IsPassChangeAktiv === true? <PassportChange setIsPassChangeAktiv={setIsPassChangeAktiv}/> : <AskPassChangeOrDelete setIsPassChangeAktiv={setIsPassChangeAktiv}/>}
        
      </div>
    </div>
  );
}

export default UserPageUserInfos;
