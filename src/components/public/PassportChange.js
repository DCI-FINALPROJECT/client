import React, { useContext, useState } from "react";
import { DataStore } from "../../DataStore";

function PassportChange() {
  const { user } = useContext(DataStore);
  console.log(user);
  
  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [repeatNewPass, setRepeatNewPass] = useState("");
  console.log(currentPass);
  console.log(newPass);
  console.log(repeatNewPass);
  const submitHandler = async (e) => {

        e.preventDefault();
      const email=user.email
    if (newPass === repeatNewPass && newPass!=="") {
      e.preventDefault();

      await fetch(`http://localhost:5000/user/passchange`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.userToken}`,
        },
        body: JSON.stringify({currentPass,newPass, email}),
      }).then((res) =>
        res.status === 200 ? alert("password is updated") : console.log(res)
      );
    }else{
        alert("pass yanlis girdiniz")
    }
  };

  return (
    <div className="" style={{ width: "50%", height: "200px" }}>
      <h5 className="mb-0">Change Password</h5>
      <hr />
      <div className="">
        <form
          className="form"
          onSubmit={submitHandler}
          role="form"
          autocomplete="off"
        >
          <div className="">
            <label for="inputPasswordOld">Current Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPasswordOld"
              required=""
              onChange={(e) => {
                setCurrentPass(e.target.value);
              }}
            />
          </div>
          <div className="">
            <label for="inputPasswordNew">New Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPasswordNew"
              required=""
              onChange={(e) => {
                setNewPass(e.target.value);
              }}
            />
            <span className="form-text small text-muted">
              The password must be 8-20 characters, and must <em>not</em>{" "}
              contain spaces.
            </span>
          </div>
          <div className="">
            <label for="inputPasswordNewVerify">Verify</label>
            <input
              type="password"
              className="form-control"
              id="inputPasswordNewVerify"
              required=""
              onChange={(e) => {
                setRepeatNewPass(e.target.value);
              }}
            />
            <span className="form-text small text-muted">
              To confirm, type the new password again.
            </span>
          </div>
          <div className="">
            <button type="submit" className="btn btn-success float-right">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PassportChange;
