import React, { useContext, useState, useEffect } from "react";
import { DataStore } from "../../DataStore";
import AdminNav from "./AdminNav";
import Footer from "./Footer";
import Header from "./Header";
import NotAuthorize from "./NotAuthorize";

function AdminUserList() {
  const [adminPermission, setadminPermission] = useState(null);
  const [allUsers, setAllUsers] = useState([]);
  const [makeAnAdmin,setMakeAnAdmin] = useState("");

  const { user } = useContext(DataStore);

  const userPagePermissionControl = () => {
    fetch("https://smartshopdcifinal.herokuapp.com/userpage", {
      method: "GET",
      Accept: "application/json",
      headers: {
        Authorization: `Bearer ${localStorage.userToken}`,
      },
    })
      .then((data) => data.json())
      .then((data) => console.log(data))
      .then((data) => {
        user.isAdmin === true
          ? setadminPermission(true)
          : setadminPermission(false);
      });
  };

  const email = user.email;
  const getAllUsers = () => {
    fetch(`https://smartshopdcifinal.herokuapp.com/admin/getallusers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.userToken}`,
      },
      body: JSON.stringify({ email }),
    })
      .then((data) => data.json())
      .then((data) => setAllUsers(data));
  };

  console.log(user);


  const deleteUser = async () => {
    if (window.confirm("Are you sure to delete this account!!!")) {
      const response = await fetch(`https://smartshopdcifinal.herokuapp.com/user/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.userToken}`,
        },
        body: JSON.stringify({ email }),
      });
      const result = response;
      if (result.status === 200) {
        alert("The account is successfully deleted!");
      }
    } else {
      alert("The account was not deleted...");

  const makeAdmin = async (e) => {
    console.log(e.target.value);

    const email = e.target.value;

    await fetch(`http://localhost:5000/admin/makeAdmin`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.userToken}`,
      },
      body: JSON.stringify({ email }),
    }).then(data=>data.json()).then(data=>setMakeAnAdmin(data))

  };

  useEffect(() => {
    getAllUsers();
  }, [makeAnAdmin]);

  userPagePermissionControl();

  return (
    <div>
      <Header />
      <AdminNav />
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {adminPermission ? (
          <div
            style={{ width: "100%" }}
            className="d-flex justify-content-center"
          >
            <div
              style={{ width: "50%", minWidth: "50%" }}
              className=" d-flex flex-column text-center"
            >
              <div className="bg-dark text-light">All Users who are not admin</div>
              <div className="bg-light border">
                {allUsers.map((user) => {
                  return (
                    user.isAdmin === false && (
                      <div
                        tag={user.email}
                        className="d-flex justify-content-around align-items-center m-2"
                      >
                        {user.firstName + " " + user.lastName}

                        <button
                          value={user.email}
                          onClick={makeAdmin}
                          className="btn btn-info"
                        >
                          {user.isAdmin === true ? "" : "Make Admin"}
                        </button>
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          </div>
        ) : <NotAuthorize/>}
      </div>
      <Footer />
    </div>
  );
}

export default AdminUserList;
