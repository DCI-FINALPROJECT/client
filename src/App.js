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
import react,{useState,useEffect} from "react";

function App() {

  const [productById,setProductById] = useState({productName:"",category:"",brand:"",price:"",describtion:"",images:[],reviews:"",stars:"",quantities:[]});

  const [user, setUser] = useState(null);

  const [searchState, setSearchState] = useState("");

  useEffect(() => {
    const getUser = () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("Authentication has been failed!");
        })
        .then((resObject) => {
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
      <DataStore.Provider value={{productById,setProductById, searchState, setSearchState}}>
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
