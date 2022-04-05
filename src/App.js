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

function App() {
  const [productById, setProductById] = useState({
    productName: "",
    category: "",
    brand: "",
    price: "",
    describtion: "",
    images: [],
    reviews: "",
    stars: "",
    quantities: [],
  });

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = () => {
      console.log("Hello");
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
          localStorage.setItem("userToken", resObject.token);  // With this statement, we can create our token via passportjs/google login

          setUser(resObject.user);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  console.log(user);

  return (
    <div className="App">
      <DataStore.Provider value={{ productById, setProductById, user }}>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/paymentconfirm" element={<PaymentConfirmPage />} />
        </Routes>
      </DataStore.Provider>
    </div>
  );
}

export default App;
