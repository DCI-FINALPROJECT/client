import React, { useContext, useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { DataStore } from "../../DataStore";
import CategoryCard from "./CategoryCard";

function CategoryProducts() {
  const params = useParams();
  const category = params.category;

  const query = new URLSearchParams(useLocation().search); // Getting query from URL

  const page =
    query.get("whichPage") === null ? 1 : parseInt(query.get("whichPage"));
   
  const limit = 4;  // If we change this number of limit, we must change also limit of getCategoryWithPage in category.controller.

  const [products, setProducts] = useState([]);
  const [numberOfProductByCategory, setNumberOfProductByCategory] = useState(0);

  const getProducts = () => {
    fetch(`http://localhost:5000/category/${category}/${page}`)
      .then((data) => data.json())
      .then((data) => setProducts(data));
  };

  const getNumberOfProducts = () => {
    fetch(
      `http://localhost:5000/category/numberOfProductByCategory/${category}`
    )
      .then((data) => data.json())
      .then((data) => setNumberOfProductByCategory(data));
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getNumberOfProducts();
  }, []);

  return (
    <main class="col-lg-9">
      <header class="d-sm-flex align-items-center border-bottom mb-4 pb-3">
        <strong class="d-block py-2">
          {" "}
          {numberOfProductByCategory} Items found{" "}
        </strong>
        <div class="ms-auto">
          <select class="form-select d-inline-block w-auto">
            <option>New Products</option>
            <option>Best Sellers</option>
            <option>Lowest Price</option>
          </select>
          <div class="btn-group"></div>
        </div>
      </header>

      {
        <div className="d-flex flex-wrap justify-content-center">
          {products.map((product, index) => {
            return <CategoryCard key={product._id} product={product} />;
          })}
        </div>
      }

      <hr />

      <footer class="d-flex mt-4">
        <div>
          <a href="?whichPage=1" class="btn btn-light">
            First Page
          </a>
        </div>
        <nav class="ms-3">
          <ul class="pagination">
            {page === 1 && (
              <div className="d-flex">
                <li class="page-item active">
                  <a class="page-link" href={`?whichPage=${page}`}>
                    1
                  </a>
                </li>
                {numberOfProductByCategory / limit > 1 && (
                  <li class="page-item" aria-current="page">
                    <a class="page-link" href={`?whichPage=2`}>
                      2
                    </a>
                  </li>
                )}
                {numberOfProductByCategory / limit > 2 && (
                  <li class="page-item" aria-current="page">
                    <a class="page-link" href={`?whichPage=3`}>
                      3
                    </a>
                  </li>
                )}
              </div>
            )}

            {page !== 1 && (
              <div className="d-flex">
                <li class="page-item">
                  <a class="page-link" href={`?whichPage=${page - 1}`}>
                    {page - 1}
                  </a>
                </li>
                <li class="page-item active" aria-current="page">
                  <a class="page-link" href={`?whichPage=${page}`}>
                    {page}
                  </a>
                </li>
                {parseInt(numberOfProductByCategory / limit) > (page) && (
                  <li class="page-item" aria-current="page">
                    <a class="page-link" href={`?whichPage=${page + 1}`}>
                      {page + 1}
                    </a>
                  </li>
                )}
              </div>
            )}

            <li class="page-item">
              <a
                class="page-link"
                href={`?whichPage=${
                  parseInt(numberOfProductByCategory / limit)
                }`}
              >
                Last Page
              </a>
            </li>
          </ul>
        </nav>
      </footer>
    </main>
  );
}

export default CategoryProducts;
