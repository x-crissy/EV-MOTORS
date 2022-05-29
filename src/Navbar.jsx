import React from "react";

const Navbar =() =>{
   
    return(
        <>
              <div className="navbar">
                <ul>
                  <li><a href="/">Home</a></li> 
                  <li><a href="/contact">-Inquiry-</a></li>
                  <li><a href="/mycart">My Cart</a></li> 
                  <li><a href="./Login.jsx">Login/SignUp</a></li> 
                  <li><a href="/about">About</a></li>
                </ul>  
              </div>
        </>
    );
};

export default Navbar;