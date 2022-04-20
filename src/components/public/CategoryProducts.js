import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import CategoryCard from "./CategoryCard";

function CategoryProducts() {
  const params = useParams();
  const category = params.category;

  const query = new URLSearchParams(useLocation().search); // Getting query from URL

  const page =
    query.get("whichPage") === null ? 1 : parseInt(query.get("whichPage"));

  const limit = 4; // If we change this number of limit, we must change also limit of getCategoryWithPage in category.controller.

  const choise = query.get("choise") === null ? "1" : query.get("choise");

  let defaultChoise = "New Products";

  if (choise === "2") {
    defaultChoise = "Best Sellers";
  } else if (choise === "3") {
    defaultChoise = "Lowest Price";
  }

  const [products, setProducts] = useState([]);
  const [numberOfProductByCategory, setNumberOfProductByCategory] = useState(0);

  const getProducts = () => {
    fetch(
      `http://localhost:5000/category/${category}/${page}?choise=${choise}&brands=${query.get(
        "brands"
      )}&min=${query.get("min")}&max=${query.get("max")}&capacities=${query.get(
        "capacities"
      )}&ratings=${query.get("ratings")}`
    )
      .then((data) => data.json())
      .then((data) => setProducts(data));
  };

  const getNumberOfProducts = () => {
    fetch(
      `http://localhost:5000/category/numberOfProductByCategory/${category}?brands=${query.get(
        "brands"
      )}&min=${query.get("min")}&max=${query.get("max")}&capacities=${query.get(
        "capacities"
      )}&ratings=${query.get("ratings")}`
    )
      .then((data) => data.json())
      .then((data) => setNumberOfProductByCategory(data));
  };

  const selectedFiltering = (e) => {
    let urlAddress = "";
    if (e.target.value === "New Products") {
      urlAddress =
        "http://localhost:3000/category/" +
        params.category +
        "?whichPage=1" +
        "&choise=1" +
        "&brands=" +
        query.get("brands") +
        "&min=" +
        query.get("min") +
        "&max=" +
        query.get("max") +
        "&capacities=" +
        query.get("capacities") +
        "&ratings=" +
        query.get("ratings");
    } else if (e.target.value === "Best Sellers") {
      urlAddress =
        "http://localhost:3000/category/" +
        params.category +
        "?whichPage=1" +
        "&choise=2" +
        "&brands=" +
        query.get("brands") +
        "&min=" +
        query.get("min") +
        "&max=" +
        query.get("max") +
        "&capacities=" +
        query.get("capacities") +
        "&ratings=" +
        query.get("ratings");
    } else if (e.target.value === "Lowest Price") {
      urlAddress =
        "http://localhost:3000/category/" +
        params.category +
        "?whichPage=1" +
        "&choise=3" +
        "&brands=" +
        query.get("brands") +
        "&min=" +
        query.get("min") +
        "&max=" +
        query.get("max") +
        "&capacities=" +
        query.get("capacities") +
        "&ratings=" +
        query.get("ratings");
    }

    window.location.href = urlAddress;
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getNumberOfProducts();
  }, []);

  return (
    <main class="col-lg-9">
      <header class="d-flex align-items-center justify-content-between border-bottom mb-4 pb-3">
        <strong class="d-block py-2">
          {numberOfProductByCategory} Items found{" "}
        </strong>
        <div class="ms-auto">
          <select
            defaultValue={defaultChoise}
            onChange={selectedFiltering}
            class="form-select d-inline-block w-auto"
          >
            <option>New Products</option>
            <option>Best Sellers</option>
            <option>Lowest Price</option>
          </select>
          <div class="btn-group"></div>
        </div>
      </header>

      {
        <div className="d-flex flex-wrap justify-content-center">
          {products.map((product) => {
            return <CategoryCard key={product._id} product={product} />;
          })}
        </div>
      }

      <hr />

      <footer class="d-flex mt-4">
        <div>
          <a
            href={`?whichPage=1&choise=${choise}&brands=${query.get(
              "brands"
            )}&min=${query.get("min")}&max=${query.get(
              "max"
            )}&capacities=${query.get("capacities")}&ratings=${query.get(
              "ratings"
            )}`}
            class="btn btn-light"
          >
            First Page
          </a>
        </div>
        <nav class="ms-3">
          <ul class="pagination">
            {page === 1 && (
              <div className="d-flex">
                <li class="page-item active">
                  <a
                    class="page-link"
                    href={`?whichPage=${page}&choise=${choise}&brands=${query.get(
                      "brands"
                    )}&min=${query.get("min")}&max=${query.get(
                      "max"
                    )}&capacities=${query.get(
                      "capacities"
                    )}&ratings=${query.get("ratings")}`}
                  >
                    1
                  </a>
                </li>
                {numberOfProductByCategory / limit > 1 && (
                  <li class="page-item" aria-current="page">
                    <a
                      class="page-link"
                      href={`?whichPage=2&choise=${choise}&brands=${query.get(
                        "brands"
                      )}&min=${query.get("min")}&max=${query.get(
                        "max"
                      )}&capacities=${query.get(
                        "capacities"
                      )}&ratings=${query.get("ratings")}`}
                    >
                      2
                    </a>
                  </li>
                )}
                {numberOfProductByCategory / limit > 2 && (
                  <li class="page-item" aria-current="page">
                    <a
                      class="page-link"
                      href={`?whichPage=3&choise=${choise}&brands=${query.get(
                        "brands"
                      )}&min=${query.get("min")}&max=${query.get(
                        "max"
                      )}&capacities=${query.get(
                        "capacities"
                      )}&ratings=${query.get("ratings")}`}
                    >
                      3
                    </a>
                  </li>
                )}
              </div>
            )}

            {page !== 1 && (
              <div className="d-flex">
                <li class="page-item">
                  <a
                    class="page-link"
                    href={`?whichPage=${
                      page - 1
                    }&choise=${choise}&brands=${query.get(
                      "brands"
                    )}&min=${query.get("min")}&max=${query.get(
                      "max"
                    )}&capacities=${query.get(
                      "capacities"
                    )}&ratings=${query.get("ratings")}`}
                  >
                    {page - 1}
                  </a>
                </li>
                <li class="page-item active" aria-current="page">
                  <a
                    class="page-link"
                    href={`?whichPage=${page}&choise=${choise}&brands=${query.get(
                      "brands"
                    )}&min=${query.get("min")}&max=${query.get(
                      "max"
                    )}&capacities=${query.get(
                      "capacities"
                    )}&ratings=${query.get("ratings")}`}
                  >
                    {page}
                  </a>
                </li>
                {numberOfProductByCategory / limit > page && (
                  <li class="page-item" aria-current="page">
                    <a
                      class="page-link"
                      href={`?whichPage=${
                        page + 1
                      }&choise=${choise}&brands=${query.get(
                        "brands"
                      )}&min=${query.get("min")}&max=${query.get(
                        "max"
                      )}&capacities=${query.get(
                        "capacities"
                      )}&ratings=${query.get("ratings")}`}
                    >
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
                  numberOfProductByCategory / limit === 0
                    ? 1
                    : Math.ceil(numberOfProductByCategory / limit)
                }&choise=${choise}&brands=${query.get(
                  "brands"
                )}&min=${query.get("min")}&max=${query.get(
                  "max"
                )}&capacities=${query.get("capacities")}&ratings=${query.get(
                  "ratings"
                )}`}
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
