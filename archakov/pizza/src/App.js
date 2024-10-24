import React from "react";

import Header from "./components/Header";

import "./scss/app.scss";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

// import pizzas from "./assets/pizza.json";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/*" element={<NotFound />} />
              
            </Routes>
          
        </div>
      </div>
    </>
  );
}

export default App;
