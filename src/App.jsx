import React from "react";
import { BrowserRouter ,Routes , Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import './App.css'


const App = () => {
  return (

      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>} />
        <Route path="Contact" element ={<Contact/>} />
        <Route path="Portfolio" element ={<Portfolio/>} />
        <Route path="About" element ={<About/>} />

      </Routes>
      
      
      </BrowserRouter>
  );
}

export default App;
