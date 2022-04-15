import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { DataStore } from "../../DataStore";

function DeleteTemplate({ product}) {

   const {setClicked}=useContext(DataStore)

   const deleteProduct =async () => {


            await fetch(`http://localhost:5000/deleteproduct/${product._id}`, {
              method: "DELETE",
            })
            setClicked(product._id)
        
    };

    

   

  return (
    <div className="m-3" style={{ width: "15rem" }}>
      <div className="card card-product-grid mx-2">
        <div className="img-wrap">
          <img src={product.images[0]} />
        </div>
        <div className="info-wrap border-top">
          <Link to={`/product/${product._id}`}>
            <div className="price-wrap">
              <strong className="price">$ {product.price}</strong>
            </div>
            <div className="" style={{ height: "100px" }}>
              <h6 className="">{product.productName}</h6>
              <p className="title mb-2">{product.description}</p>
            </div>
          </Link>
          <div className="d-flex justify-content-around">
            <button onClick={deleteProduct} className="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteTemplate;