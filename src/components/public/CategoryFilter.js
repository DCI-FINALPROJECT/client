import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

function CategoryFilter() {
  const query = new URLSearchParams(useLocation().search);

  const choise = query.get("choise") === null ? "1" : query.get("choise");
  const queryBrands = query.get("brands") === null ? [] : query.get("brands");
  const queryCapacities =
    query.get("capacities") === null ? [] : query.get("capacities");
  const queryRatings =
    query.get("ratings") === null ? "0" : query.get("ratings");
  const min = query.get("min") === null ? 0 : query.get("min");
  const max = query.get("max") === null ? 0 : query.get("max");

  let defaultRating = "0";

  if (queryRatings === ">0") {
    defaultRating = "⭐";
  } else if (queryRatings === ">20") {
    defaultRating = "⭐⭐";
  } else if (queryRatings === ">40") {
    defaultRating = "⭐⭐⭐";
  } else if (queryRatings === ">60") {
    defaultRating = "⭐⭐⭐⭐";
  } else if (queryRatings === ">80") {
    defaultRating = "⭐⭐⭐⭐";
  }

  let defaultValuesForBrands = [];
  let defaultValuesForCapacities = [];
  let defaultValuesForRatings = "0";

  if (queryBrands !== [] && queryBrands.length > 0) {
    defaultValuesForBrands = queryBrands.split(",");
  }

  if (queryCapacities !== [] && queryCapacities.length > 0) {
    defaultValuesForCapacities = queryCapacities.split(",");
  }

  if (queryRatings !== "" && queryRatings.length > 0) {
    defaultValuesForRatings = queryRatings;
  }

  console.log("QR",queryRatings);

  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState(defaultValuesForBrands);
  const [minPrice, setMinPrice] = useState(min);
  const [maxPrice, setMaxPrice] = useState(max);
  const [capacities, setCapacities] = useState([]);
  const [selectedCapacities, setSelectedCapacities] = useState(
    defaultValuesForCapacities
  );
  const [selectedRatings, setSelectedRatings] = useState(
    defaultValuesForRatings
  );

  const params = useParams();

  const category = params.category;

  const changingBrand = (e) => {
    const options = selectedBrands;

    let index = 0;

    if (e.target.checked) {
      options.push(e.target.value);
    } else {
      index = options.indexOf(e.target.value);
      options.splice(index, 1);
    }
    setSelectedBrands(options);
  };

  const changingCapacity = (e) => {
    const options = selectedCapacities;

    let index = 0;

    if (e.target.checked) {
      options.push(e.target.value);
    } else {
      index = options.indexOf(e.target.value);
      options.splice(index, 1);
    }
    setSelectedCapacities(options);
  };

  const changingRatings = (e) => {
    let options = selectedRatings;

    console.log(e.target.value);

    if (e.target.value === "⭐") {
      options = ">0";
    } else if (e.target.value === "⭐⭐") {
      options = ">20";
    } else if (e.target.value === "⭐⭐⭐") {
      options = ">40";
    } else if (e.target.value === "⭐⭐⭐⭐") {
      options = ">60";
    } else if (e.target.value === "⭐⭐⭐⭐⭐") {
      options = ">80";
    }
    console.log(options);
    setSelectedRatings(options);
  };

  console.log("SR", selectedRatings);

  const applyFilter = (e) => {
    let address = `http://localhost:3000/category/${category}?whichPage=1&choise=${choise}&brands=${selectedBrands}&min=${minPrice}&max=${maxPrice}&capacities=${selectedCapacities}&ratings=${selectedRatings}`;

    window.location.href = address;
  };

  const minPriceChanged = (e) => {
    setMinPrice(e.target.value);
  };
  const maxPriceChanged = (e) => {
    setMaxPrice(e.target.value);
  };

  const getBrandsFromDatabase = () => {
    fetch(`http://localhost:5000/product/brands/filter/${params.category}`)
      .then((data) => data.json())
      .then((data) => setBrands(data));
  };

  useEffect(() => {
    getBrandsFromDatabase();
  }, []);

  const getAllCapacities = () => {
    fetch(`http://localhost:5000/capacity/getAllCapacities`)
      .then((data) => data.json())
      .then((data) => setCapacities(data));
  };

  useEffect(getAllCapacities, []);

  return (
    <aside class="col-lg-3">
      <button
        class="btn btn-outline-secondary mb-3 w-100  d-lg-none"
        data-bs-toggle="collapse"
        data-bs-target="#aside_filter"
      >
        Show filter
      </button>

      <div id="aside_filter" class="collapse card d-lg-block mb-5">
        <article class="filter-group">
          <header class="card-header">
            <a
              href="#"
              class="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside_brands"
            >
              <i class="icon-control fa fa-chevron-down"></i>
              Brands
            </a>
          </header>
          <div class="collapse show" id="collapse_aside_brands">
            <div class="card-body">
              {brands.map((brand) => {
                return (
                  <label class="form-check mb-2">
                    <input
                      defaultChecked={
                        selectedBrands.includes(Object.keys(brand)[0])
                          ? true
                          : false
                      }
                      onChange={changingBrand}
                      class="form-check-input"
                      type="checkbox"
                      value={Object.keys(brand)}
                    />
                    <span class="form-check-label"> {Object.keys(brand)} </span>
                    <b class="badge rounded-pill bg-gray-dark float-end">
                      {Object.values(brand)}
                    </b>
                  </label>
                );
              })}
            </div>
          </div>
        </article>

        <article class="filter-group">
          <header class="card-header">
            <a
              href="#"
              class="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside3"
            >
              <i class="icon-control fa fa-chevron-down"></i>
              Capacity
            </a>
          </header>
          <div class="collapse show" id="collapse_aside3">
            <div class="card-body">
              {capacities.map((capacity) => {
                return (
                  <label class="checkbox-btn m-1">
                    <input
                      onChange={changingCapacity}
                      value={capacity.capacityName}
                      type="checkbox"
                      defaultChecked={
                        selectedCapacities.includes(capacity.capacityName)
                          ? true
                          : false
                      }
                    />

                    <span class="btn btn-light"> {capacity.capacityName} </span>
                  </label>
                );
              })}
            </div>
          </div>
        </article>

        <article class="filter-group">
          <header class="card-header">
            <a
              href="#"
              class="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside4"
            >
              <i class="icon-control fa fa-chevron-down"></i>
              Ratings
            </a>
            <div class="collapse show" id="collapse_aside4">
              <div class="ms-auto">
                <select
                  defaultValue={defaultRating}
                  onChange={changingRatings}
                  class="form-select d-inline-block w-auto"
                >
                  <option>⭐</option>
                  <option>⭐⭐</option>
                  <option>⭐⭐⭐</option>
                  <option>⭐⭐⭐⭐</option>
                  <option>⭐⭐⭐⭐⭐</option>
                </select>
                <div class="btn-group"></div>
              </div>
            </div>
          </header>
        </article>

        <article class="filter-group">
          <header class="card-header">
            <a
              href="#"
              class="title"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside2"
            >
              <i class="icon-control fa fa-chevron-down"></i>
              Price
            </a>
          </header>
          <div class="collapse show" id="collapse_aside2">
            <div class="card-body">
              <input type="range" class="form-range" min="0" max="100" />
              <div class="row mb-3">
                <div class="col-6">
                  <label for="min" class="form-label">
                    Min
                  </label>
                  <input
                    onChange={minPriceChanged}
                    class="form-control"
                    id="min"
                    placeholder="$0"
                    type="number"
                    defaultValue={minPrice}
                  />
                </div>

                <div class="col-6">
                  <label for="max" class="form-label">
                    Max
                  </label>
                  <input
                    onChange={maxPriceChanged}
                    class="form-control"
                    id="max"
                    placeholder="$1,0000"
                    type="number"
                    defaultValue={maxPrice}
                  />
                </div>
              </div>
              <button
                onClick={applyFilter}
                class="btn btn-light w-100"
                type="button"
              >
                Apply
              </button>
            </div>
          </div>
        </article>
      </div>
    </aside>
  );
}

export default CategoryFilter;
