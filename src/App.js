import "./App.css";
import Homepage from "./components/pages/Homepage";
import RegisterPage from "./components/pages/RegisterPage";
import LoginPage from "./components/pages/LoginPage";
import AdminPage from "./components/pages/AdminPage";
import UserPage from "./components/pages/UserPage";
import ProductPage from "./components/pages/ProductPage";
import PaymentPage from "./components/pages/PaymentPage";
import PaymentConfirmPage from "./components/pages/PaymentPageConfirmation";
import { DataStore } from "./DataStore";
import { Routes, Route } from "react-router-dom";
import react, { useState, useEffect } from "react";
import SearchPage from "./components/pages/SearchPage";
import CategoryPage from "./components/pages/CategoryPage";
import ReviewCart from "./components/public/ReviewCart";
import { CookiesProvider } from "react-cookie";
import DeletePage from "./components/pages/DeletePage";
import EditPage from "./components/pages/EditPage";
import AddProductPage from "./components/pages/AddProductPage";

function App() {
  const [productById, setProductById] = useState({
    productName: "",
    category: "",
    brand: "",
    price: "",
    description: "",
    images: [],
    quantities: [],
    capacity: "",
    stock:{Black:0,Red:0,Green:0,Blue:0}
  });

  const [user, setUser] = useState({photo:"https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png",email:undefined});

  const [searchState, setSearchState] = useState("null");

  const [allProducts, setAllProducts] = useState([]);

  const [categories, setCategories] = useState([]);

  const [clicked, setClicked] = useState(""); // With this state we can control amendment of selected product.

  const [productStars, setProductStars] = useState(0);



  const loadProducts = async () => {
    const response = await fetch(`http://localhost:5000/products/all`);
    const productsResponse = await response.json();
    setAllProducts(productsResponse);
  };

  useEffect(() => {
    (async () => {
      await loadProducts();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clicked]);

  //Add all categories in categoryArray
  const categoryArray = [];
  allProducts.forEach((product) => {
    if (!categoryArray.includes(product.category)) {
      categoryArray.push(product.category);
    }
  });

  useEffect(() => {
    setCategories(categoryArray);
  }, [allProducts]);
  //category finish

  // This useEffect controls whether there are already any token (user) in browser.
  useEffect(() => {
    const resp = fetch("http://localhost:5000/finduser", {
      method: "GET",
      Accept: "application/json",
      headers: {
        Authorization: `Bearer ${localStorage.userToken}`,
      },
    })
      .then((data) => data.json())
      .then((data) => setUser(data.user));
  }, []);

  console.log(user);

  useEffect(() => {
    const getUserWithPassportJs = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "text/plain",
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("Authentication has been failed!");
        })
        .then((resObject) => {
          localStorage.setItem("userToken", resObject.token); // With this statement, we can create our token via passportjs/google login

          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUserWithPassportJs();
  }, []);

  return (
    <div className="App">
      <DataStore.Provider
        value={{
          productById,
          setProductById,
          searchState,
          setSearchState,
          allProducts,
          setAllProducts,
          user,
          setUser,
          categories,
          setCategories,
          clicked,
          setClicked,
          productStars,
          setProductStars,
        }}
      >
        <CookiesProvider>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} />   
            <Route path="/admin/addproduct" element={<AddProductPage />} />              
            <Route path="/admin/deleteproduct/:productName" element={<DeletePage/>} />
            <Route path="/admin/edit/:id" element={<EditPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/product/:id" element={<ProductPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/paymentconfirm" element={<PaymentConfirmPage />} />
            <Route path="/search/:productName" element={<SearchPage />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/deneme" element={<ReviewCart />} />
          </Routes>
        </CookiesProvider>

      </DataStore.Provider>
    </div>
  );
}

export default App;
