import React, { useContext, useState } from "react";
import { DataStore } from "../../DataStore";

function PassportChange({ setIsPassChangeAktiv }) {
  const { user } = useContext(DataStore);

  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [repeatNewPass, setRepeatNewPass] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = user.email;
    if (newPass === repeatNewPass && newPass !== "") {
      e.preventDefault();

      const newPassword = {
        currentPass,
        newPass,
        email,
      };
      const response = await fetch(`http://localhost:5000/user/passchange`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.userToken}`,
        },
        body: JSON.stringify(newPassword),
      });
      const result = response;
      if (result.status === 200) {
        alert("You are successfully your password changed!");
        setIsPassChangeAktiv(false);
      } else {
        response.json().then((data) => {
          console.log("data", data.message);

          alert(data.message);
        });
      }
    } else {
      alert(
        "didn't is written any new password or new passwords are not equal to each other."
      );
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
          <div className="mb-3">
            <label for="currentPassword">Current Password</label>
            <div className="d-flex">
              <input
                type="password"
                className="form-control"
                id="currentPassword"
                required=""
                onChange={(e) => {
                  setRepeatNewPass(e.target.value);
                }}
              />
              <button type="button" className="btn btn-light">
                <i
                  className="text-muted far fa-eye"
                  onClick={() => {
                    const x = document.getElementById("currentPassword");
                    x.type === "password"
                      ? (x.type = "text")
                      : (x.type = "password");
                  }}
                ></i>
              </button>
            </div>
          </div>
          <div className="mb-3">
            <label for="newPassword">New Password</label>
            <div className="d-flex">
              <input
                type="password"
                className="form-control"
                id="newPassword"
                required=""
                onChange={(e) => {
                  setRepeatNewPass(e.target.value);
                }}
              />
              <button type="button" className="btn btn-light">
                <i
                  className="text-muted far fa-eye"
                  onClick={() => {
                    const x = document.getElementById("newPassword");
                    x.type === "password"
                      ? (x.type = "text")
                      : (x.type = "password");
                  }}
                ></i>
              </button>
            </div>
            <span className="form-text small text-muted">
              The password must be 8-20 characters, and must <em>not</em>{" "}
              contain spaces.
            </span>
          </div>
          <div className="mb-3">
            <label for="inputPasswordNewVerify">Verify</label>
            <div className="d-flex">
              <input
                type="password"
                className="form-control"
                id="inputPasswordNewVerify"
                required=""
                onChange={(e) => {
                  setRepeatNewPass(e.target.value);
                }}
              />
              <button type="button" className="btn btn-light">
                <i
                  className="text-muted far fa-eye"
                  onClick={() => {
                    const x = document.getElementById("inputPasswordNewVerify");
                    x.type === "password"
                      ? (x.type = "text")
                      : (x.type = "password");
                  }}
                ></i>
              </button>
            </div>
            <span className="form-text small text-muted">
              To confirm, type the new password again.
            </span>
          </div>
          <div className="">
            <button type="submit" className="btn btn-success float-right">
              Save
            </button>
            <button
              type="submit"
              onClick={() => {
                setIsPassChangeAktiv(false);
              }}
              className="btn btn-warning mr-3 float-right"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PassportChange;
