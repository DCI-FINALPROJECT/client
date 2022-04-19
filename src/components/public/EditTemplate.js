import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function EditTemplate() {
  const params = useParams();
  const id = params.id;

  const [productById, setProductById] = useState({
    productName: "",
    category: "",
    brand: "",
    price: "",
    description: "",
    images: [],
    quantities: [],
    capacity: "",
    stock: { Black: 0, Red: 0, Green: 0, Blue: 0 },
  });

  const getProductById = async () => {
    const data = await fetch(`http://localhost:5000/product/${id}`);
    const response = await data.json();
    setProductById(response);
  };

  useEffect(() => {
    getProductById();
  }, []);

  const [updateProduct, setUpdateProduct] = useState({});

  function submitHandler(e) {
    e.preventDefault();

    fetch(`http://localhost:5000/admin/updateproduct/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.userToken}`,
      },
      body: JSON.stringify(updateProduct),
    }).then((res) => res.status===200?alert("product is updated"):console.log(res));
  }

  function changeHandle(e) {
    let dataByInput = e.target.value;

    setUpdateProduct({ ...updateProduct, [e.target.name]: dataByInput });
  }

  return (
    <div>
      <div className="bg">
        <div className="container pt-5 pb-5">
          <div className="row">
            <div className="card m-auto " style={{ width: "50%" }}>
              <article className="card-body">
                <h4 className="mb-4">Edit product</h4>
                <form
                  action="/admin/updateproduct"
                  onSubmit={submitHandler}
                  method="put"
                  enctype="multipart/form-data"
                >
                  {/* product name */}
                  <div className="row mb-4">
                    <label className="col-3 col-form-label">Product Name</label>
                    <div className="col-9">
                      <input
                        type="text"
                        className="form-control"
                        name="productName"
                        defaultValue={productById.productName}
                        onChange={changeHandle}
                      />
                    </div>
                  </div>
                  {/* category */}
                  <div className="row mb-4">
                    <label className="col-3 col-form-label">Category</label>
                    <div className="col-9">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={productById.category}
                        name="category"
                        onChange={changeHandle}
                      />
                    </div>
                  </div>
                  {/* brand */}
                  <div className="row mb-4">
                    <label className="col-3 col-form-label">Brand</label>
                    <div className="col-9">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={productById.brand}
                        name="brand"
                        onChange={changeHandle}
                      />
                    </div>
                  </div>
                  {/* price */}
                  <div className="row mb-4">
                    <label className="col-3 col-form-label">Price</label>
                    <div className="col-9">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={productById.price}
                        name="price"
                        onChange={changeHandle}
                      />
                    </div>
                  </div>
                  {/* image */}
                  <div className="row mb-4">
                    <label className="col-3 col-form-label">
                      Image <br />{" "}
                      <small className="text-muted">(Max 10 mb)</small>
                    </label>
                    <div className="col-9">
                      <input
                        type="file"
                        className="form-control"
                        placeholder="Type here"
                        name="images"
                        onChange={changeHandle}
                      />
                    </div>
                  </div>
                  {/* description */}
                  <div className="row mb-4">
                    <label className="col-3 col-form-label">Description</label>
                    <div className="col-9">
                      <textarea
                        className="form-control"
                        defaultValue={productById.description}
                        name="description"
                        onChange={changeHandle}
                      ></textarea>
                    </div>
                  </div>
                  {/* quantities */}
                  <div className="row mb-4">
                    <label className="col-3 col-form-label">Capacity</label>
                    <div className="col-9">
                      <input
                        type="text"
                        className="form-control"
                        defaultValue={productById.capacity}
                        name="capacity"
                        onChange={changeHandle}
                      />
                    </div>
                  </div>

                  <div className="row mb-2">
                    <div className="col-9 offset-3">
                      <button type="submit" className="btn btn-primary">
                        Edit product
                      </button>
                      <button type="reset" className="btn btn-outline-danger">
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </article>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
