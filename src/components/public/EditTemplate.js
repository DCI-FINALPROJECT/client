import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";

export default function EditTemplate() {
  const params = useParams();
  const id = params.id;

  const [changeCategory, setChangeCategory] = useState(false);
  const [changeImage, setChangeImage] = useState(false);

  const [productById, setProductById] = useState({
    productName: "",
    category: "",
    brand: "",
    price: "",
    description: "",
    images: ["", "", "", ""],
    quantities: [],
    stock: [],
    capacity: "",
  });

  const [categories, setCategories] = useState([]);
  const [dosya1, setDosya1] = useState(productById.images[0]);
  const [dosya2, setDosya2] = useState(productById.images[1]);
  const [dosya3, setDosya3] = useState(productById.images[2]);
  const [dosya4, setDosya4] = useState(productById.images[3]);

  const getProductById = async () => {
    const data = await fetch(`https://smartshopdcifinal.herokuapp.com/product/${id}`);
    const response = await data.json();
    setProductById(response);
    setDosya1(response.images[0]);
    setDosya2(response.images[1]);
    setDosya3(response.images[2]);
    setDosya4(response.images[3]);
  };

  useEffect(() => {
    getProductById();
  }, []);

  const el = useRef();

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
    fetch("https://smartshopdcifinal.herokuapp.com/category/getAllCategories")
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
      changeCategory
        ? event.target.category[event.target.category.selectedIndex].textContent
        : productById.category
    );
    formData.append("brand", event.target.brand.value);
    formData.append("price", event.target.price.value);
    formData.append("Black", event.target.Black.value);
    formData.append("Red", event.target.Red.value);
    formData.append("Green", event.target.Green.value);
    formData.append("Blue", event.target.Blue.value);
    formData.append("capacity", event.target.capacity.value);

    console.log(dosya1);

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
      .put(`https://smartshopdcifinal.herokuapp.com/admin/updateproduct/${id}`, formData, {})
      .then(function (gelenVeri) {
        console.log("Kayıt Tamamdır.");
      });

    event.target.reset();
    document.location.reload();
  }

  function changeHandle(e) {
    let dataByInput = e.target.value;

    console.log(e.target.value);
    setProductById({ ...productById, [e.target.name]: dataByInput });
  }

  console.log(productById.category);

  return (
    <div className="bg">
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="card m-auto ">
            <article className="card-body">
              <h4 className="mb-4">
                Edit product with name {productById.productName}
              </h4>
              <form
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
                      defaultValue={productById.productName}
                    />
                  </div>
                </div>
                {/* category */}

                <div className="row mb-4">
                  <label className="col-md-3 col-form-label">Category</label>

                  {changeCategory ? (
                    <div className="col-md-9">
                      <select
                        onChange={changeHandle}
                        id="category"
                        name="category"
                        defaultValue={productById.category}
                      >
                        {categories.map((category) => {
                          return (
                            <option defaultChecked={productById.category}>
                              {category.categoryName}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                  ) : (
                    <button
                      onClick={() => setChangeCategory(true)}
                      className="btn btn-outline-gray"
                    >
                      {productById.category}
                    </button>
                  )}
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
                      defaultValue={productById.brand}
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
                      defaultValue={productById.price}
                    />
                  </div>
                </div>
                <div className="row mb-4">
                  <label className="col-md-3 col-form-label">
                    Image <br />
                    <small className="text-muted">(Max 10 mb)</small>
                  </label>

                  <div className="d-flex flex-column justify-content-around align-items-center flex-wrap col mb-2 p-2  align-items-center">
                    {changeImage === false ? (
                      <img
                        className="mt-3 border shadow"
                        style={{ height: "100px" }}
                        src={productById.images[0]}
                        alt=""
                        onClick={() => setChangeImage(true)}
                      />
                    ) : (
                      <div>
                        <span>Image 1</span>
                        <input
                          ref={el}
                          className="pl-2 w-75"
                          name="dosya1"
                          id="dosya1"
                          type="file"
                          onChange={imageHandle}
                          required
                        />
                      </div>
                    )}
                    {changeImage === false ? (
                      <img
                        className="mt-3 border shadow"
                        style={{ height: "100px" }}
                        src={productById.images[1]}
                        alt=""
                        onClick={() => setChangeImage(true)}
                      />
                    ) : (
                      <div>
                        <span>Image 2</span>
                        <input
                          ref={el}
                          className="pl-2 w-75"
                          name="dosya2"
                          id="dosya2"
                          type="file"
                          onChange={imageHandle}
                          required
                        />
                      </div>
                    )}
                  </div>
                  <div className="d-flex flex-column justify-content-around align-items-center flex-wrap col mb-2 p-2  align-items-center">
                    {changeImage === false ? (
                      <img
                        className="mt-3 border shadow"
                        style={{ height: "100px" }}
                        src={productById.images[2]}
                        alt=""
                        onClick={() => setChangeImage(true)}
                      />
                    ) : (
                      <div>
                        <span>Image 3</span>
                        <input
                          ref={el}
                          className="pl-2 w-75"
                          name="dosya3"
                          id="dosya3"
                          type="file"
                          onChange={imageHandle}
                          required
                        />
                      </div>
                    )}
                    {changeImage === false ? (
                      <img
                        className="mt-3 border shadow"
                        style={{ height: "100px" }}
                        src={productById.images[3]}
                        alt=""
                        onClick={() => setChangeImage(true)}
                      />
                    ) : (
                      <div>
                        <span>Image 4</span>
                        <input
                          ref={el}
                          className="pl-2 w-75"
                          name="dosya4"
                          id="dosya4"
                          type="file"
                          onChange={imageHandle}
                          required
                        />
                      </div>
                    )}
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
                      defaultValue={productById.stock.Black}
                    />
                    <input
                      type="text"
                      className="form-control m-2"
                      placeholder="Red"
                      name="Red"
                      onChange={changeHandle}
                      defaultValue={productById.stock.Red}
                    />
                    <input
                      type="text"
                      className="form-control m-2"
                      placeholder="Green"
                      name="Green"
                      onChange={changeHandle}
                      defaultValue={productById.stock.Green}
                    />
                    <input
                      type="text"
                      className="form-control m-2"
                      placeholder="Blue"
                      name="Blue"
                      onChange={changeHandle}
                      defaultValue={productById.stock.Blue}
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
                      defaultValue={productById.description}
                      style={{ minHeight: "200px" }}
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
                      defaultValue={productById.capacity}
                    />
                  </div>
                </div>

                <div className="row mb-2">
                  <div className="col-9 offset-3">
                    <button type="submit" className="btn btn-primary">
                      Update product
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
