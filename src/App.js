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
import react,{useState} from "react";

function App() {

  const [productById,setProductById] = useState({productName:"",category:"",brand:"",price:"",describtion:"",images:[],reviews:"",stars:"",quantities:[]});


  return (
    <div className="App">
      <DataStore.Provider value={{productById,setProductById}}>
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
