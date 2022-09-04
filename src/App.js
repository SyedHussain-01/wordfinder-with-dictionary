import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeScreen from "./Pages/HomeScreen";
import Search from "./Pages/Search";

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/search" element={<Search/>} />
      </Routes>
    </div>
  );
}

export default App;
