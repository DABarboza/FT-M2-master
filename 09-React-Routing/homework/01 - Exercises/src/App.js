import React from "react";
/* eslint-disable */
import Home from "./components/Home/Home.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import Shipping from "./components/Shipping/Shipping.jsx";
import Discounts from "./components/Discounts/Discounts.jsx";
import CardDetail from "./components/CardDetail/CardDetail.jsx";
/* eslint-disable */
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}>
          Home
        </Route>
        <Route path="/shipping" element={<Shipping />}>
          Shipping
        </Route>
        <Route path="/discounts" element={<Discounts />}>
          Discounts
        </Route>
        <Route path="/cruises/:id" element={<CardDetail />}>
          CardDetail
        </Route>
      </Routes>
    </div>
  );
}
