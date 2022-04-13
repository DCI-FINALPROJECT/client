import React, { useState } from "react";

function AdminTemplate() {
  const [addProduct, setAddProduct] = useState({
    productName: "",
    category: "",
    brand: "",
    price: 0,
    description: "",
    images: [],
    quantities: [],
  });

  function submitHandler(e) {
    e.preventDefault();

    fetch("http://localhost:5000/addproduct", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addProduct),
    }).then((res) => console.log(res));
  }

  function changeHandle(e) {
    let dataByInput = e.target.value;

    setAddProduct({ ...addProduct, [e.target.name]: dataByInput });
  }

  console.log("addproduct", addProduct);

  return (
    <div className="bg">
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="card m-auto " style={{ width: "50%" }}>
            <article className="card-body">
              <h4 className="mb-4">Add product</h4>
              <form
                action="/addproduct"
                onSubmit={submitHandler}
                method="post"
                enctype="multipart/form-data"
              >
                {/* product name */}
                <div className="row mb-4">
                  <label className="col-3 col-form-label">Product Name</label>
                  <div className="col-9">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type here"
                      name="productName"
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
                      placeholder="Type here"
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
                      placeholder="Type here"
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
                      placeholder="$ 0.00"
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
                    {/* <div className="gallery-uploader-wrap d-flex justify-content-start">
                      <div
                        style={{ width: "80px", height: "80px" }}
                        className="uploader-img mr-3"
                      >
                        <img
                          width="100%"
                          src="images/items/1.jpg"
                        />
                      </div>
                      <div
                        style={{ width: "80px", height: "80px" }}
                        className="uploader-img mr-3"
                      >
                        <img
                          width="100%"
                          src="images/items/2.jpg"
                        />
                      </div>
                      <div
                        style={{ width: "80px", height: "80px" }}
                        className="uploader-img"
                      >
                        <input type="file" name="lorem" />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="#999"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                        >
                          <circle cx="12" cy="12" r="3"></circle>
                          <path d="M16.83 4L15 2H9L7.17 4H2v16h20V4h-5.17zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path>
                        </svg>
                      </div>
                    </div> */}
                  </div>
                </div>
                {/* description */}
                <div className="row mb-4">
                  <label className="col-3 col-form-label">Description</label>
                  <div className="col-9">
                    <textarea
                      className="form-control"
                      placeholder="Type here"
                      name="description"
                      onChange={changeHandle}
                    ></textarea>
                  </div>
                </div>
                {/* quantities */}
                <div className="row mb-4">
                  <label className="col-3 col-form-label">Quantity</label>
                  <div className="col-9">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type here"
                      name="quantities"
                      onChange={changeHandle}
                    />
                  </div>
                </div>
                {/* brand */}
                {/* <div className="row mb-4">
                  <label className="col-3 col-form-label">Brand</label>
                  <div className="col-9">
                    <select
                      className="form-select d-flex justify-content-start"
                      size="4"
                    >
                      <option selected="">Select brand</option>
                      <option value="1">Asus</option>{" "}
                      <option value="2">Apple</option>
                      <option value="3">Xuiaomi </option>
                      <option value="4">Artel </option>
                      <option value="6">Google </option>
                    </select>
                  </div>
                </div> */}
                {/* features */}
                {/*  <div className="row mb-4">
                  <label className="col-3 col-form-label">Features</label>
                  <div className="col-9">
                    <ul className="row row-cols-xxl-3 row-cols-2">
                      <li>
                        <label className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                          />
                          <span className="form-check-label"> Metallic </span>
                        </label>
                      </li>
                      <li>
                        <label className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                          />
                          <span className="form-check-label"> 5K Display </span>
                        </label>
                      </li>
                      <li>
                        <label className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                          />
                          <span className="form-check-label"> High speed </span>
                        </label>
                      </li>
                      <li>
                        <label className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                          />
                          <span className="form-check-label"> Ultra wide </span>
                        </label>
                      </li>
                      <li>
                        <label className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                          />
                          <span className="form-check-label"> 5K Display </span>
                        </label>
                      </li>
                      <li>
                        <label className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                          />
                          <span className="form-check-label">
                            {" "}
                            Blootooth 3.0{" "}
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                </div> */}
                <div className="row mb-2">
                  <div className="col-9 offset-3">
                    <button type="submit" className="btn btn-primary">
                      Add product
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
  );
}

export default AdminTemplate;
