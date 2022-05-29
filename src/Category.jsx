import React, { useState } from "react";

    const Category = () => {

         return (
         <> 
             <div className="new">
             <h1 className="category">Category</h1>
                <h3 className="EV-C">:EV Cars</h3>
             <div className="content">
                 <blockquote className="cars">
                    <img src="./assets/images/Categpry/Porche.jpg" alt="BMW i4" width="100%" height="33%" /><br/>
                    <h2> Porsche Taycan
                       <br/>Rs.1.50 - 2.30 Cr*
                    </h2>
                    <button  className="cart"><img src="./assets/cart.png" alt="" /></button>
                </blockquote>
                <blockquote className="cars">
                    <img src="./assets/images/Categpry/Jaguar.jpg" alt="KIA" width="100%" height="33%"/><br/>
                    <h2>Jaguar I-Pace
                       <br/>Rs.47.20 Lakh*
                    </h2>
                    <button className="cart"><img src="./assets/cart.png" alt="" /></button>
                </blockquote>
                <blockquote className="cars">
                    <img src="./assets/images/Categpry/Cooper.jpg" alt="ford" width="100%" height="33%"/><br/>
                    <h2>Mini Cooper SE
                       <br/> Rs.1.08 - 1.12 Cr*
                    </h2>
                    <button className="cart"><img src="./assets/cart.png" alt="" /></button>
                </blockquote>
                <br/>
                <blockquote className="cars">
                    <img src="./assets/images/Categpry/BMW ix.jpg" alt="hyundai-kona" width="100%" height="33%"/><br/>
                    <h2>BMW iX
                       <br/>Rs.1.16 Cr*
                    </h2>
                    <button className="cart"><img src="./assets/cart.png" alt="" /></button>
                </blockquote>
                <blockquote className="cars">
                    <img src="./assets/images/Categpry/Audi etron.webp" alt="mersedes" width="100%" height="33%"/><br/>
                    <h2>Audi e-tron GT
                       <br/> ₹s.1.80 Cr*
                    </h2>
                    <button className="cart"><img src="./assets/cart.png" alt="" /></button>
                </blockquote>
                <blockquote className="cars">
                    <img src="./assets/images/Categpry/BMW 7.jpg" alt="tesla#" width="100%" height="33%"/><br/>
                    <h2>  BMW 7 Series
                       <br/>Rs.1.42 - 2.46 Cr*
                    </h2>
                    <button className="cart"><img src="./assets/cart.png" alt="" /></button>
                </blockquote>
                </div>
                <h3 className="EV-C">:EV Bikes</h3>
             <div className="content">
                 <blockquote className="cars">
                    <img src="./assets/images/Products/ather.jpg" alt="BMW i4" width="100%" height="33%"/><br/>
                    <h2> Ather 450X
                       <br/>Rs.1.19 - 1.38 Lakh*
                    </h2>
                    <button className="cart"><img src="./assets/cart.png" alt="" /></button>
                </blockquote>
                <blockquote className="cars">
                    <img src="./assets/images/Products/atumobile.webp" alt="KIA" width="100%" height="33%"/><br/>
                    <h2>Atumobile Atum Version 1.0
                       <br/>Rs.54,999*
                    </h2>
                    <button className="cart"><img src="./assets/cart.png" alt="" /></button>
                </blockquote>
                <blockquote className="cars">
                    <img src="./assets/images/Products/iqube.jpg" alt="ford" width="100%" height="33%"/><br/>
                    <h2>TVS iQube Electric
                       <br/> Rs.1.38 Lakh*
                    </h2>
                    <button className="cart"><img src="./assets/cart.png" alt="" /></button>
                </blockquote>
                <br/>
                <blockquote className="cars">
                    <img src="./assets/images/Products/oben.webp" alt="Oben Rorr" width="100%" height="33%"/><br/>
                    <h2>Oben Rorr
                       <br/>Rs.1.02 Lakh*
                    </h2>
                    <button className="cart"><img src="./assets/cart.png" alt="" /></button>
                </blockquote>
                <blockquote className="cars">
                    <img src="./assets/images/Products/revolt.webp" alt="Revolt RV400" width="100%" height="33%"/><br/>
                    <h2>Revolt RV400
                       <br/> Rs.1.25 Lakh*
                    </h2>
                    <button className="cart"><img src="./assets/cart.png" alt="" /></button>
                </blockquote>
                <blockquote className="cars">
                    <img src="./assets/images/Products/tork.webp" alt=" Tork Kratos#" width="100%" height="33%"/><br/>
                    <h2> Tork Kratos
                       <br/>Rs.1.02 - 1.17 Lakh*
                    </h2>
                    <button className="cart"><img src="./assets/cart.png" alt="" /></button>
                </blockquote>
            </div>
            <h3 className="EV-C">:EV Bicycle</h3>
             <div className="content">
                 <blockquote className="cars tootlip">
                   <img src="./assets/images/Products/Emotoro.jpg" alt="EMotorad EMX" width="100%" height="33%"/><br/>
                    <h2>EMotorad EMX 
                       <br/>Rs.58,999*
                    
                    </h2>
                    <button className="cart"><img src="./assets/cart.png" alt="" /></button>
                </blockquote>
                <blockquote className="cars">
                    <img src="./assets/images/Products/hero.webp" alt="Hero Lectro F6i" width="100%" height="33%"/><br/>
                    <h2>Hero Lectro F6i
                       <br/>Rs.54,999*
                    </h2>
                    <button className="cart"><img src="./assets/cart.png" alt="" /></button>
                </blockquote>
                <blockquote className="cars">
                    <img src="./assets/images/Products/toutuche.webp" alt="Toutche Heileo M200" width="100%" height="33%"/><br/>
                    <h2> Toutche Heileo M200
                       <br/>Rs.57,900*
                    </h2>
                    <button className="cart" ><img src="./assets/cart.png" alt="" /></button>
                </blockquote>
                </div>
         </div>
        
    
        
        </>        );
    };

export default Category;

        
  