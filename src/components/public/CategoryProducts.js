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
      `https://smartshopdcifinal.herokuapp.com/category/${category}/${page}?choise=${choise}&brands=${query.get(
        "brands"
      )}&min=${query.get("min")}&max=${query.get("max")}&capacities=${query.get(
        "capacities"
      )}`
    )
      .then((data) => data.json())
      .then((data) => setProducts(data));
  };

  const getNumberOfProducts = () => {
    fetch(
      `https://smartshopdcifinal.herokuapp.com/category/numberOfProductByCategory/${category}?brands=${query.get(
        "brands"
      )}&min=${query.get("min")}&max=${query.get("max")}&capacities=${query.get(
        "capacities"
      )}`
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
        query.get("capacities");
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
        query.get("capacities");
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
        query.get("capacities") ;
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
    <main className="col-lg-9">
      <header className="d-flex align-items-center justify-content-between border-bottom mb-4 pb-3">
        <strong className="d-block py-2">
          {numberOfProductByCategory} Items found{" "}
        </strong>
        <div className="ms-auto">
          <select
            defaultValue={defaultChoise}
            onChange={selectedFiltering}
            className="form-select d-inline-block w-auto"
            style={{borderRadius: "5px", border:"none", padding:"5px 3px", color:"#595454"}}
          >
            <option>New Products</option>
            <option>Best Sellers</option>
            <option>Lowest Price</option>
          </select>
          <div className="btn-group"></div>
        </div>
      </header>

      {
        <div classNameName="d-flex flex-wrap justify-content-center">
          {products.map((product) => {
            
            return <CategoryCard key={product._id} product={product} />;
          })}
        </div>
      }

      <hr />

      <footer className="d-flex mt-4">
        <div>
          <a
            href={`?whichPage=1&choise=${choise}&brands=${query.get(
              "brands"
            )}&min=${query.get("min")}&max=${query.get(
              "max"
            )}&capacities=${query.get("capacities")}`}
            className="btn btn-light"
          >
            First Page
          </a>
        </div>
        <nav className="ms-3">
          <ul className="pagination">
            {page === 1 && (
              <div className="d-flex">
                <li className="page-item active">
                  <a
                    className="page-link"
                    href={`?whichPage=${page}&choise=${choise}&brands=${query.get(
                      "brands"
                    )}&min=${query.get("min")}&max=${query.get(
                      "max"
                    )}&capacities=${query.get(
                      "capacities"
                    )}`}
                  >
                    1
                  </a>
                </li>
                {numberOfProductByCategory / limit > 1 && (
                  <li className="page-item" aria-current="page">
                    <a
                      className="page-link"
                      href={`?whichPage=2&choise=${choise}&brands=${query.get(
                        "brands"
                      )}&min=${query.get("min")}&max=${query.get(
                        "max"
                      )}&capacities=${query.get(
                        "capacities"
                      )}`}
                    >
                      2
                    </a>
                  </li>
                )}
                {numberOfProductByCategory / limit > 2 && (
                  <li className="page-item btn btn-light" aria-current="page">
                    <a
                      className="page-link"
                      href={`?whichPage=3&choise=${choise}&brands=${query.get(
                        "brands"
                      )}&min=${query.get("min")}&max=${query.get(
                        "max"
                      )}&capacities=${query.get(
                        "capacities"
                      )}`}
                    >
                      3
                    </a>
                  </li>
                )}
              </div>
            )}

            {page !== 1 && (
              <div className="d-flex">
                <li className="page-item">
                  <a
                    className="page-link"
                    href={`?whichPage=${
                      page - 1
                    }&choise=${choise}&brands=${query.get(
                      "brands"
                    )}&min=${query.get("min")}&max=${query.get(
                      "max"
                    )}&capacities=${query.get(
                      "capacities"
                    )}`}
                  >
                    {page - 1}
                  </a>
                </li>
                <li className="page-item active" aria-current="page">
                  <a
                    className="page-link"
                    href={`?whichPage=${page}&choise=${choise}&brands=${query.get(
                      "brands"
                    )}&min=${query.get("min")}&max=${query.get(
                      "max"
                    )}&capacities=${query.get(
                      "capacities"
                    )}`}
                  >
                    {page}
                  </a>
                </li>
                {numberOfProductByCategory / limit > page && (
                  <li className="page-item" aria-current="page">
                    <a
                      className="page-link"
                      href={`?whichPage=${
                        page + 1
                      }&choise=${choise}&brands=${query.get(
                        "brands"
                      )}&min=${query.get("min")}&max=${query.get(
                        "max"
                      )}&capacities=${query.get(
                        "capacities"
                      )}`}
                    >
                      {page + 1}
                    </a>
                  </li>
                )}
              </div>
            )}

            <li classNameName="page-item">
              <a
                className="page-link btn btn-light text-dark"
                href={`?whichPage=${
                  numberOfProductByCategory / limit === 0
                    ? 1
                    : Math.ceil(numberOfProductByCategory / limit)
                }&choise=${choise}&brands=${query.get(
                  "brands"
                )}&min=${query.get("min")}&max=${query.get(
                  "max"
                )}&capacities=${query.get("capacities")}`}
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
