import React from "react";
import Navbarcart from "./Component/Navbarcart";
import Navbar from "./Component/Navbarcart"

 const Cart = () => {
     return (
         <>
            <Navbarcart/>
            <div className="content">
                 <blockquote className="cars">
                    <img src="./assets/images/Categpry/Porche.jpg" alt="BMW i4" width="100%" height="33%"/><br/>
                    <h2> Porsche Taycan
                       <br/>Rs.1.50 - 2.30 Cr*
                    </h2>
                    
                </blockquote>
                <blockquote className="cars">
                    <img src="./assets/images/Categpry/Jaguar.jpg" alt="KIA" width="100%" height="33%"/><br/>
                    <h2>Jaguar I-Pace
                       <br/>Rs.47.20 Lakh*
                    </h2>
                    
                </blockquote>
                <blockquote className="cars">
                    <img src="./assets/images/Categpry/Cooper.jpg" alt="ford" width="100%" height="33%"/><br/>
                    <h2>Mini Cooper SE
                       <br/> Rs.1.08 - 1.12 Cr*
                    </h2>
                    
                </blockquote>
                </div>
                <div className="footer">
                  <blockquote><br />
                     <h1> For details: <br />
                           Phn no. -1800 200 300 <br />
                           Email- <a href="www.gmail.com">evmarketplace@project.xyz</a> &nbsp;
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <a href="www.gmail.com">rishavsinghraj1@gmail.com</a> (owner)
                               <br /><br /> 
                     </h1>   
                     <a href="/" className="homebtn"><h2>Home</h2></a>
                  </blockquote>    
               </div>
         </>
    );
 };

 export default Cart;