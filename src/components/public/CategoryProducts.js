import React, { useContext, useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { DataStore } from "../../DataStore";
import CategoryCard from "./CategoryCard";

function CategoryProducts() {
  const { allProducts } = useContext(DataStore);

  const params = useParams();

  const category = params.category;

 

  return (
    <main class="col-lg-9">
      <header class="d-sm-flex align-items-center border-bottom mb-4 pb-3">
        <strong class="d-block py-2">
          32 Items found{" "}
        </strong>
        <div class="ms-auto">
          <select   class="form-select d-inline-block w-auto">
            <option >New Products</option>
            <option >Best Sellers</option>
            <option >Lowest Price</option>
          </select>
          <div class="btn-group">
         
          
          </div>
        </div>
      </header>

      {
        <div className="d-flex flex-wrap justify-content-center">
          {[].map((product, index) => {
            return <CategoryCard key={product._id} product={product} />;
          })}
        </div>
      }

      <hr />

      <footer class="d-flex mt-4">
        <div>
          <a href="javascript: history.back()" class="btn btn-light">
            « Go back
          </a>
        </div>
        <nav class="ms-3">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item active" aria-current="page">
              <span class="page-link">2</span>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </main>
  );
}

export default CategoryProducts;
