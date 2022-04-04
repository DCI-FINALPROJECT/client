import React from "react";

function AdminTemplate() {
  return (
    <div className="container pt-5 pb-5">
      <div className="row">
      <div className="card m-auto">
        <article className="card-body">
          <h4 className="mb-4">Submit product</h4>
          <form>
            <div className="row mb-4">
              <label className="col-3 col-form-label">Title</label>
              <div className="col-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Type here"
                />
              </div>
            </div>
            <div className="row mb-4">
              <label className="col-3 col-form-label">Price</label>
              <div className="col-9">
                <input
                  type="text"
                  className="form-control"
                  placeholder="$ 0.00"
                />
              </div>
            </div>
            <div className="row mb-4">
              <label className="col-3 col-form-label">
                Image <br /> <small className="text-muted">(Max 10 mb)</small>
              </label>
              <div className="col-9">
                <div className="gallery-uploader-wrap d-flex justify-content-start">
                  <div
                    style={{ width: "80px", height: "80px" }}
                    className="uploader-img mr-3">
                      <img
                      width="100%"
                      src="bootstrap5-ecommerce/images/items/1.jpg"
                    />
                  </div>
                  <div
                    style={{ width: "80px", height: "80px" }}
                    className="uploader-img mr-3">
                    <img
                      width="100%"
                      src="bootstrap5-ecommerce/images/items/2.jpg"
                    />
                  </div>
                  <div
                    style={{width: "80px", height: "80px"}}
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
                </div>
              </div>
            </div>
            <div className="row mb-4">
              <label className="col-3 col-form-label">Description</label>
              <div className="col-9">
                <textarea
                  className="form-control"
                  placeholder="Type here"
                ></textarea>
              </div>
            </div>
            <div className="row mb-4">
              <label className="col-3 col-form-label">Brand</label>
              <div className="col-9">
                <select className="form-select d-flex justify-content-start" size="4">
                  <option selected="">Select brand</option>
                  <option value="1">Asus</option>{" "}
                  <option value="2">Apple</option>
                  <option value="3">Xuiaomi </option>
                  <option value="4">Artel </option>
                  <option value="6">Google </option>
                </select>
              </div>
            </div>
            <div className="row mb-4">
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
                      <span className="form-check-label"> Blootooth 3.0 </span>
                    </label>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col-9 offset-3">
                <button type="button" className="btn btn-primary">
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
  );
}

export default AdminTemplate;