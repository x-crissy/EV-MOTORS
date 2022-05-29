import React from "react";
import "../Component/navbar.css"

    const Navbarcart = () => {
        return (
            <>
                <nav>
                    <div className="nav_box">
                        <span className="my_shop">My Shopping List</span>
                          <a href="/">Home</a>
                        <a href="/about">About</a>

                        <div className="cart">
                            <span><img src="./assets/cart.png" alt="" className="img"/></span>
                            <span>3</span>
                      
                            </div>
                    </div>
                </nav>
            </>
        );
    };

export default Navbarcart;