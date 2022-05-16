import React, { useState, useEffect,useContext } from "react";
import { Link } from "react-router-dom";
import { DataStore } from "../../DataStore";
import AdminNav from "../public/AdminNav";
import Footer from "../public/Footer";
import Header from "../public/Header";
import NotAuthorize from "./NotAuthorize";

function AdminPopulerProducts() {
  const [adminPermission, setadminPermission] = useState(null);
  const [populerProducts, setPopulerProducts] = useState([]);

  const { user} = useContext(DataStore);

  const userPagePermissionControl = () => {
    fetch("http://localhost:5000/userpage", {
      method: "GET",
      Accept: "application/json",
      headers: {
        Authorization: `Bearer ${localStorage.userToken}`,
      },
    })
      .then((data) => data.json())
      .then((data)=>console.log(data))
      .then((data) => {
        user.isAdmin === true  ? 
        setadminPermission(true) : setadminPermission(false)});
  };

  const getPopulerProducts = () => {
    fetch(`http://localhost:5000/admin/populerproducts`)
      .then((data) => data.json())
      .then((data) => setPopulerProducts(data));
  };

  useEffect(() => {
    getPopulerProducts();
  }, []);

  userPagePermissionControl();
  return (
    <div>
      <Header />
      <AdminNav />
      <div className="d-flex justify-content-center align-items-center flex-wrap">
      {adminPermission
        ? populerProducts.map((product) => {
            return (
              <div className="m-3" style={{ width: "15rem" }}>
              <Link to={`/product/${product._id}`}>
                <div className="card card-product-grid mx-2">
                  <div className="img-wrap">
                    <img src={product.images[0]} />
                  </div>
                  <div className="info-wrap border-top">
                    <div className="price-wrap">
                      <strong className="price">$ {product.price}</strong>
                    </div>
                    <div className="" style={{ height: "100px" }}>
                      <h6 className="">{product.productNameWithCapacity}</h6>
                    </div>
                    <div className="d-flex justify-content-around">
                     <span className="bg-success rounded p-2 text-light"> Sales: {product.sales} </span>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
            );
          })
        : 
           <NotAuthorize/>}
          
        </div>
      <Footer />
    </div>
  );
}

export default AdminPopulerProducts;
