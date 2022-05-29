import React from "react" ;
import Navbarcart from "./Component/Navbarcart";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import Login from "./Login"
import Cart from "./Cart" 
import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
    return (
        <>
        
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/about" element={<About/>} />
                <Route exact path="/contact" element={<Contact/>} />\
                <Route exact path="/mycart" element={<Cart/>} />
                <Route exact path="/Login.jsx" element={<Login/>} />
                <Route path="*" element={<Navigate to ="/" />}/>
              </Routes>
        </> 
    );
}; 

export default App;
