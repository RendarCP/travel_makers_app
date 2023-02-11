import React from "react";
import { Reset } from "styled-reset";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Category from "./pages/Category";
import Alarm from "./pages/Alarm";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <div>
      <Reset />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/alarm" element={<Alarm />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </div>
  );
}

export default App;
