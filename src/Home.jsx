import React from "react";
import Navbar from "./Navbar";
import Slideshow from "./Slideshow"
import Upcomings from "./Upcomings"
import Yt from "./Yt"
import Category from "./Category"

const Home = () => {
    return (
        <>
        
        <img src="./assets/images/logo.jpeg" alt="logo.%3" className="logo"/>
        <div  className="rightimg">
        <img src="./assets/images/tesla.webp" alt="hoverme$%" width="100%" height="150%"/>
            <div>
            <p> <h1>Electric Car</h1>
                This article is about cars which are powered only by batteries. 
                For vehicles with both an internal combustion engine and electric propulsion, see Hybrid electric vehicle.
                Research has shown that electric cars are better for the environment.
                 They emit fewer greenhouse gases and air pollutants than petrol or diesel cars.
                 And this takes into account their production and electricity generation to keep them running. 
               <br/> <a href="https://en.wikipedia.org/wiki/Electric_car">Read more...</a>
            </p>
            </div>
        </div>
        <Navbar/>
        <Slideshow/>
        <Upcomings/>
        <Category/>
        <Yt/>
        <div className="footer">
                  <blockquote><br />
                     <h1> For details: <br />
                           Phn no. -1800 200 300 <br />
                           Email- <a href="www.gmail.com">evmarketplace@project.xyz</a> &nbsp;
                               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  <a href="www.gmail.com">rishavsinghraj1@gmail.com</a> (owner)
                               <br /><br /> 
                     </h1>   
                     
                  </blockquote>    
               </div>
        </>
    );
};

export default Home;