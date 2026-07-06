import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import HomePage from "./landing_page/HomePage/HomePage";
import PricingPage from "./landing_page/Pricing/PricingPage";
import Products from"./landing_page/Products/Products";
import Signup from "./landing_page/Signup/Signup";
import SupportPage from "./landing_page/Support/SupportPage";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AboutPage from "./landing_page/About/AboutPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFound from "./landing_page/NotFound";
import Login from "./landing_page/Login/Login";
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(
  <BrowserRouter>
  <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}> </Route>
      <Route path="/Pricing" element={<PricingPage/>}></Route>
      <Route path="/Products" element={<Products/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="/login" element={<Login/>}></Route>

      <Route path="/Support" element={<SupportPage/>}></Route>
      <Route path="/About" element={<AboutPage/>}></Route>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
    <Footer/>
  </BrowserRouter>
);
