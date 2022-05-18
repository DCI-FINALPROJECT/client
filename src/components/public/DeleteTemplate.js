import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataStore } from "../../DataStore";

function DeleteTemplate({ product }) {
  const { setClicked } = useContext(DataStore);

  const deleteProduct = async () => {
    await fetch(`https://smartshopdcifinal.herokuapp.com/admin/deleteproduct/${product._id}`, {
      method: "DELETE",
      Accept: "application/json",
      headers: {
        Authorization: `Bearer ${localStorage.userToken}`,
      },
    });
    setClicked(product._id);
  };

  return (
    <div className="m-3" style={{ width: "15rem" }}>
      <div className="card card-product-grid mx-2">
        <Link to={`/product/${product._id}`}>
          <div className="img-wrap">
            <img src={product.images[0]} />
          </div>
        </Link>
        <div className="info-wrap border-top">
          <div className="price-wrap">
            <strong className="price">$ {product.price}</strong>
          </div>
          <div className="" style={{ height: "100px" }}>
            <h6 className="">{product.productNameWithCapacity}</h6>
          </div>
          <div className="d-flex justify-content-around">
            <button onClick={deleteProduct} className="btn btn-danger">
              Delete
            </button>
            <Link to={`/admin/edit/${product._id}`}  className="btn btn-warning">
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteTemplate;
