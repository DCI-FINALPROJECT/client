import React, { useState, useEffect } from "react";
import AdminNav from "../public/AdminNav";
import Footer from "../public/Footer";
import Header from "../public/Header";

function AdminCategoryPage() {
  const [adminPermission, setadminPermission] = useState(null);
  const [allCategories, setAllCategories] = useState([]);
  const [newCategory,setNewCategory] = useState("");

  const userPagePermissionControl = () => {
    fetch("http://localhost:5000/userpage", {
      method: "GET",
      Accept: "application/json",
      headers: {
        Authorization: `Bearer ${localStorage.userToken}`,
      },
    })
      .then((data) => data.json())
      .then((data) => setadminPermission(data.status));
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
    });
    setNewCategory(categoryValue);
    document.querySelector("#category").value = "";
  };

  const getAllCategories = () => {
    fetch("http://localhost:5000/category/getAllCategories")
      .then((data) => data.json())
      .then((data) => setAllCategories(data));
  };

  useEffect(() => {
    getAllCategories();
  }, [newCategory]);

  console.log(allCategories);

  return (
    <div>
      <Header />
      <AdminNav />
      {adminPermission ? (
        <div className=" d-flex justify-content-center align-items-center  text-center">
          <form onSubmit={addCategory}>
            <div className="bg-dark text-light">All Categories</div>
            <div className="bg-light border">
              {allCategories.map((category) => {
                return <div>{category.categoryName}</div>;
              })}
            </div>
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
      ) : (
        "You are not authorized! "
      )}

      <Footer />
    </div>
  );
}

export default AdminCategoryPage;
