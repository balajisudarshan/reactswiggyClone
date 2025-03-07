import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Menu from "./components/Menu";
import { BrowserRouter, Routes, Route } from "react-router";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/"element={<Home/>}/>
          <Route path="/about"element={<About/>}/>
          <Route path="/menu/:id" element={<Menu/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
