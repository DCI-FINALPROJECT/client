import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataStore } from "../../DataStore";
import SearchTemplate from "./SearchTemplate";

function CategoryProducts() {
  const { allProducts } = useContext(DataStore);

  const params = useParams();

  const category = params.category;

  let categoriedProducts = allProducts.filter((product) => {
    return (
      product.category.toLowerCase().indexOf(category.toLowerCase()) !== -1
    );
  });

  return (
    <div>
      <div className="d-flex justify-content-end align-items-center">
        <header class="d-sm-flex align-items-center border-bottom mb-4 pb-3">
          <strong class="d-block py-2">{categoriedProducts.length} Items found </strong>
          <div class="ms-auto">
            <select class="form-select d-inline-block w-auto">
              <option value="0">Best match</option>
              <option value="1">Recommended</option>
              <option value="2">High rated</option>
              <option value="3">Randomly</option>
            </select>
            <div class="btn-group">
             
           
            </div>
          </div>
        </header>
      </div>
      <div>
        {
          <div className="d-flex flex-wrap justify-content-center">
            {categoriedProducts.map((product,index) => {
              return <SearchTemplate key={product._id} product={product} />;
            })}
          </div>
        }
      </div>
    </div>
  );
}

export default CategoryProducts;
