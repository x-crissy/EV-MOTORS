import React from "react";
const Slideshow = () => {
    return(
    <>
       <h1 className="latest">From across the World</h1>
       <br /><br />
       <div>
       <section id="slider">
            <input type="radio" name="slider" id="s1" />   
            <input type="radio" name="slider" id="s2" />   
            <input type="radio" name="slider" id="s3" />   
            <input type="radio" name="slider" id="s4" />   
            <input type="radio" name="slider" id="s5" /> 
            <label htmlFor="s1" id="slider1">
                <img src="./assets/images/slider/img1.jpg" alt="slider-img%^"  width="100%" height="100%" />    
            </label>
            <label htmlFor="s2" id="slider2">
                <img src="./assets/images/slider/img2.jpg" alt="slider-img%^"  width="100%" height="100%" />    
            </label>   
            <label htmlFor="s3" id="slider3">
                <img src="./assets/images/slider/img3.jpg" alt="slider-img%^"  width="100%" height="100%" />    
            </label>   
            <label htmlFor="s4" id="slider4">
                <img src="./assets/images/slider/img4.jpg" alt="slider-img%^"  width="100%" height="100%" />    
            </label>   
            <label htmlFor="s4" id="slider5">
                <img src="./assets/images/slider/img5.webp" alt="slider-img%^"  width="100%" height="100%" />    
            </label>                
        </section>
        </div>
    </> 
    );
};

export default Slideshow;