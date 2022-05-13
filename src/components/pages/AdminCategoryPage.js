import React, { useState, useEffect, useContext } from "react";
import { DataStore } from "../../DataStore";
import AdminNav from "../public/AdminNav";
import Footer from "../public/Footer";
import Header from "../public/Header";

function AdminCategoryPage() {
  const [adminPermission, setadminPermission] = useState(null);
  const [allCategories, setAllCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");
  const [deletedCategory,setDeletedCategory] = useState(null);

  const { user } = useContext(DataStore);

  const userPagePermissionControl = () => {
    fetch("http://localhost:5000/userpage", {
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

  userPagePermissionControl();

  const addCategory = (e) => {
    e.preventDefault();
    let categoryValue = document.querySelector("#category").value;

    console.log(
      categoryValue.substring(0, 1).toUpperCase() +
        categoryValue.substring(1).toLowerCase()
    );

    fetch("http://localhost:5000/category/createCategory", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        categoryName: categoryValue.toUpperCase(),
        categoryUrl:
          categoryValue.substring(0, 1).toUpperCase() +
          categoryValue.substring(1).toLowerCase(),
      }),
    }).then(() => setNewCategory(categoryValue));

    document.querySelector("#category").value = "";
  };

  const getAllCategories = () => {
    fetch("http://localhost:5000/category/getAllCategories")
      .then((data) => data.json())
      .then((data) => setAllCategories(data));
  };

  const deleteCategory = (category) => {
    console.log(category._id);

    fetch(`http://localhost:5000/category/delete/${category._id}`,{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({id:category._id})
    }).then(data=>data.json()).then(data=>setDeletedCategory(data.deletedId))

  };

  useEffect(() => {
    getAllCategories();
  }, [newCategory,deletedCategory]);

  console.log(allCategories);

  return (
    <div>
      <Header />
      <AdminNav />
      {adminPermission ? (
        <div style={{width:"100%"}} className="d-flex justify-content-center">
          <div
            style={{ width: "50%", minWidth: "50%" }}
            className=" d-flex flex-column text-center"
          >
            <div className="bg-dark text-light">All Categories</div>
            <div className="bg-light border">
              {allCategories.map((category) => {
                return (
                  <div className="d-flex justify-content-around align-items-center m-2">
                    {category.categoryName}
                    <button
                      onClick={() => {
                        deleteCategory(category);
                      }}
                      className="btn btn-danger"
                    >
                      Delete {category.categoryName}
                    </button>
                  </div>
                );
              })}
            </div>
            <form onSubmit={addCategory}>
              <div class="mb-3 mt-3">
                <label for="exampleInputEmail1" class="form-label">
                  New Category Name
                </label>
                <input
                  id="category"
                  type="category"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
              </div>

              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      ) : (
        "You are not authorized! "
      )}

      <Footer />
    </div>
  );
}

export default AdminCategoryPage;
