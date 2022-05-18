import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

function CategoryFilter() {
  const query = new URLSearchParams(useLocation().search);

  const choise = query.get("choise") === null ? "1" : query.get("choise");
  const queryBrands = query.get("brands") === null ? [] : query.get("brands");
  const queryCapacities =
    query.get("capacities") === null ? [] : query.get("capacities");
  const min = query.get("min") === null ? 0 : query.get("min");
  const max = query.get("max") === null ? 0 : query.get("max");



  let defaultValuesForBrands = [];
  let defaultValuesForCapacities = [];

  if (queryBrands !== [] && queryBrands.length > 0) {
    defaultValuesForBrands = queryBrands.split(",");
  }

  if (queryCapacities !== [] && queryCapacities.length > 0) {
    defaultValuesForCapacities = queryCapacities.split(",");
  }



  const [brands, setBrands] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState(defaultValuesForBrands);
  const [minPrice, setMinPrice] = useState(min);
  const [maxPrice, setMaxPrice] = useState(max);
  const [capacities, setCapacities] = useState([]);
  const [selectedCapacities, setSelectedCapacities] = useState(
    defaultValuesForCapacities
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



  const applyFilter = (e) => {
    let address = `http://localhost:3000/category/${category}?whichPage=1&choise=${choise}&brands=${selectedBrands}&min=${minPrice}&max=${maxPrice}&capacities=${selectedCapacities}`;

    window.location.href = address;
  };

  const minPriceChanged = (e) => {
    setMinPrice(e.target.value);
  };
  const maxPriceChanged = (e) => {
    setMaxPrice(e.target.value);
  };

  const getBrandsFromDatabase = () => {
    fetch(`https://smartshopdcifinal.herokuapp.com/product/brands/filter/${params.category}`)
      .then((data) => data.json())
      .then((data) => setBrands(data));
  };

  useEffect(() => {
    getBrandsFromDatabase();
  }, []);

  const getAllCapacities = () => {
    fetch(`https://smartshopdcifinal.herokuapp.com/capacity/getAllCapacities`)
      .then((data) => data.json())
      .then((data) => setCapacities(data));
  };

  useEffect(getAllCapacities, []);

  return (
    <aside className="col-lg-3">
      <button
        className="btn btn-outline-secondary mb-3 w-100  d-lg-none"
        data-bs-toggle="collapse"
        data-bs-target="#aside_filter"
      >
        Show filter
      </button>

      <div id="aside_filter" className="collapse card d-lg-block mb-5">
        <article className="filter-group">
          <header className="card-header">
            <a
              href="#"
              className="title yellow hover h5"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside_brands"
            >
              <i className="icon-control fa fa-chevron-down"></i>
              Brands
            </a>
          </header>
          <div className="collapse show" id="collapse_aside_brands">
            <div className="card-body">
              {brands.map((brand) => {
                return (
                  <label className="form-check mb-2">
                    <input
                      defaultChecked={
                        selectedBrands.includes(Object.keys(brand)[0])
                          ? true
                          : false
                      }
                      onChange={changingBrand}
                      className="form-check-input"
                      type="checkbox"
                      value={Object.keys(brand)}
                    />
                    <span className="form-check-label"> {Object.keys(brand)} </span>
                    <b className="badge rounded-pill bg-gray-dark float-end">
                      {Object.values(brand)}
                    </b>
                  </label>
                );
              })}
            </div>
          </div>
        </article>

        <article className="filter-group">
          <header className="card-header">
            <a
              href="#"
              className="title yellow hover h5"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside3"
            >
              <i className="icon-control fa fa-chevron-down"></i>
              Capacity
            </a>
          </header>
          <div className="collapse show" id="collapse_aside3">
            <div className="card-body">
              {capacities.map((capacity) => {
                return (
                  <label className="checkbox-btn m-1">
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

                    <span className="btn btn-light"> {capacity.capacityName} </span>
                  </label>
                );
              })}
            </div>
          </div>
        </article>

        <article className="filter-group">
          <header className="card-header">
            <a
              href="#"
              className="title yellow hover h5"
              data-bs-toggle="collapse"
              data-bs-target="#collapse_aside2"
            >
              <i className="icon-control fa fa-chevron-down yellow"></i>
              Price
            </a>
          </header>
          <div className="collapse show" id="collapse_aside2">
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-6">
                  <label for="min" className="form-label">
                    Min
                  </label>
                  <input
                    onChange={minPriceChanged}
                    className="form-control"
                    id="min"
                    placeholder="$0"
                    type="number"
                    defaultValue={minPrice}
                  />
                </div>

                <div className="col-6">
                  <label for="max" className="form-label">
                    Max
                  </label>
                  <input
                    onChange={maxPriceChanged}
                    className="form-control"
                    id="max"
                    placeholder="$1,0000"
                    type="number"
                    defaultValue={maxPrice}
                  />
                </div>
              </div>
              <button
                onClick={applyFilter}
                className="btn btn-light btn-yellow w-100"
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
