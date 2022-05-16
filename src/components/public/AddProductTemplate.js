import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function AdminTemplate() {
  const [addProduct, setAddProduct] = useState({
    productName: "",
    category: "",
    brand: "",
    price: 0,
    description: "",
    images: [],
    quantities: [],
    stock: [],
    capacity: "",
  });

  const el = useRef();

  const [categories, setCategories] = useState([]);
  const [dosya1, setDosya1] = useState("");
  const [dosya2, setDosya2] = useState("");
  const [dosya3, setDosya3] = useState("");
  const [dosya4, setDosya4] = useState("");

  function imageHandle(event) {
    const dosya = event.target.files[0];
    const nameDegeri = event.target.name;

    if (nameDegeri === "dosya1") {
      setDosya1(dosya);
    } else if (nameDegeri === "dosya2") {
      setDosya2(dosya);
    } else if (nameDegeri === "dosya3") {
      setDosya3(dosya);
    } else if (nameDegeri === "dosya4") {
      setDosya4(dosya);
    }
  }

  console.log(dosya1);

  function getCategories() {
    fetch("http://localhost:5000/category/getAllCategories")
      .then((data) => data.json())
      .then((data) => setCategories(data));
  }

  useEffect(() => {
    getCategories();
  }, []);

  console.log(categories);

  function submitHandler(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("productName", event.target.productName.value);
    formData.append("description", event.target.description.value);
    formData.append(
      "category",
      event.target.category[event.target.category.selectedIndex].textContent
    );
    formData.append("brand", event.target.brand.value);
    formData.append("price", event.target.price.value);
    formData.append("Black", event.target.Black.value);
    formData.append("Red", event.target.Red.value);
    formData.append("Green", event.target.Green.value);
    formData.append("Blue", event.target.Blue.value);
    formData.append("capacity", event.target.capacity.value);

    if (dosya1 !== "") {
      formData.append("dosya1", dosya1);
    }
    if (dosya2 !== "") {
      formData.append("dosya2", dosya2);
    }
    if (dosya3 !== "") {
      formData.append("dosya3", dosya3);
    }
    if (dosya4 !== "") {
      formData.append("dosya4", dosya4);
    }

    axios
      .post("http://localhost:5000/admin/addproduct", formData, {})
      .then(function (gelenVeri) {
        console.log("Kayıt Tamamdır.");
      });

    event.target.reset();
  }

  function changeHandle(e) {
    let dataByInput = e.target.value;

    console.log(e.target.value);
    setAddProduct({ ...addProduct, [e.target.name]: dataByInput });
  }

  console.log("addproduct", dosya1);

  return (
    <div className="bg">
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="card m-auto ">
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
                  <label className="col-md-3 col-form-label">
                    Product Name
                  </label>
                  <div className="col-md-9">
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
                  <label className="col-md-3 col-form-label">Category</label>
                  <div className="col-md-9">
                    <select
                      onChange={changeHandle}
                      id="category"
                      name="category"
                    >
                      {categories.map((category) => {
                        return <option>{category.categoryName}</option>;
                      })}
                    </select>
                  </div>
                </div>
                {/* brand */}
                <div className="row mb-4">
                  <label className="col-md-3 col-form-label">Brand</label>
                  <div className="col-md-9">
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
                  <label className="col-md-3 col-form-label">Price</label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="$ 0.00"
                      name="price"
                      onChange={changeHandle}
                    />
                  </div>
                </div>
                <div className="row mb-4">
                  <label className="col-md-3 col-form-label">
                    Image <br />{" "}
                    <small className="text-muted">(Max 10 mb)</small>
                  </label>

                  <div className="d-flex flex-wrap col mb-2 p-2  align-items-center">
                    <div>
                      <span>Image 1</span>
                      <input
                        required
                        ref={el}
                        className="pl-2 w-75"
                        name="dosya1"
                        id="dosya1"
                        type="file"
                        onChange={imageHandle}
                      />
                    </div>
                    <div>
                      <span>Image 2</span>
                      <input
                        required
                        ref={el}
                        className="pl-2 w-75"
                        name="dosya2"
                        id="dosya2"
                        type="file"
                        onChange={imageHandle}
                      />
                    </div>
                    <div>
                      <span>Image 3</span>
                      <input
                        required
                        ref={el}
                        className="pl-2 w-75"
                        name="dosya3"
                        id="dosya3"
                        type="file"
                        onChange={imageHandle}
                      />
                    </div>
                    <div>
                      <span>Image 4</span>
                      <input
                        required
                        ref={el}
                        className="pl-2 w-75"
                        name="dosya4"
                        id="dosya4"
                        type="file"
                        onChange={imageHandle}
                      />
                    </div>
                  </div>
                </div>

                <div className="row mb-4">
                  <label className="col-md-3 col-form-label">Stock</label>
                  <div className="d-flex justify-content-between align-items-center">
                    <input
                      type="text"
                      className="form-control m-2"
                      placeholder="Black"
                      name="Black"
                      onChange={changeHandle}
                    />
                    <input
                      type="text"
                      className="form-control m-2"
                      placeholder="Red"
                      name="Red"
                      onChange={changeHandle}
                    />
                    <input
                      type="text"
                      className="form-control m-2"
                      placeholder="Green"
                      name="Green"
                      onChange={changeHandle}
                    />
                    <input
                      type="text"
                      className="form-control m-2"
                      placeholder="Blue"
                      name="Blue"
                      onChange={changeHandle}
                    />
                  </div>
                </div>

                {/* description */}
                <div className="row mb-4">
                  <label className="col-md-3 col-form-label">Description</label>
                  <div className="col-md-9">
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
                  <label className="col-md-3 col-form-label">Capacity</label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type here"
                      name="capacity"
                      onChange={changeHandle}
                      value="64 GB"
                    />
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-9 offset-3">
                    <button type="submit" className="btn btn-primary">
                      Add product
                    </button>
                    <Link to={"/admin"}>
                      <button type="reset" className="btn btn-warning mx-3">
                        Cancel
                      </button>
                    </Link>
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
