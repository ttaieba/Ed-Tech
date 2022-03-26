import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import './App.css';
import AboutUs from "./Pages/AboutUs/AboutUs";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}>
          </Route>
          < Route path="Home" element={<Home />} />
          < Route path="Products" element={<Products />} />
          < Route path="Blogs" element={<Blogs />} />
          < Route path="About" element={<AboutUs />} />
        </Routes >
        <Footer></Footer>
      </BrowserRouter >,
    </div >
  );
}

export default App;
