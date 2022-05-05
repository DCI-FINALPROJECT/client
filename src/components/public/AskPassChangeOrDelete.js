import React, { useContext } from "react";
import { DataStore } from "../../DataStore";
import { useCookies } from "react-cookie";
import { logout } from "../helpers/logout";

function AskPassChangeOrDelete({ setIsPassChangeAktiv }) {

  const { user } = useContext(DataStore);
  const [cookies, setCookies, removeCookie] = useCookies(["cart"]);

  const clickHandler = async () => {
    if (window.confirm("Are you sure to delete your account!!!")) {
      const email=user.email
      const response =await fetch(`http://localhost:5000/user/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.userToken}`,
        },
        body: JSON.stringify({email}),
      })
      const result = response;
      if (result.status === 200) {
        alert("Your account is successfully deleted!");
        logout()
        removeCookie("cart")
        localStorage.clear("userToken")
      }
   
    } else {
      alert("We are very pleased that you are staying with us:)");
    }
  };
  return (
    <div class="row" style={{ maxWidth: "920px" }}>
      <div class="col-md">
        <article class="box mb-3 bg-light">
          <button
            class="btn float-end btn-light btn-sm"
            onClick={() => {
              setIsPassChangeAktiv(true);
            }}
            href="#"
          >
            Change
          </button>
          <p class="title mb-0">Password</p>
          <small class="text-muted d-block" style={{ width: "70%" }}>
            You can reset or change your password by clicking here
          </small>
        </article>
      </div>
      <div class="col-md">
        <article class="box mb-3 bg-light">
          <button
            class="btn float-end btn-outline-danger btn-sm"
            onClick={clickHandler}
          >
            Deactivate
          </button>
          <p class="title mb-0">Remove account</p>
          <small class="text-muted d-block" style={{ width: "70%" }}>
            Once you delete your account, there is no going back.
          </small>
        </article>
      </div>
    </div>
  );
}

export default AskPassChangeOrDelete;
