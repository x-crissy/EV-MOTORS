import React from "react";

const Upcomings = () => {
    return (
        <>
        {/* Upcomings list(data from cardekho.com) */}
        <div class="new">
             <h1 className="Latest-up-comings">Latest up comings!</h1>
             <div class="content">
                 <blockquote class="cars">
                    <img src="./assets/images/Products/BME i4.jfif" alt="BMW i4" width="100%" height="33%"/><br/>
                    <h2> BMW i4
                       <br/> ₹80.00 lakhs (estimated)
                    </h2>
                </blockquote>
                <blockquote class="cars">
                    <img src="./assets/images/Products/KIA EV6.jpg" alt="KIA" width="100%" height="33%"/><br/>
                    <h2> KIA EV6
                       <br/> ₹65.00 (estimated)
                    </h2>
                </blockquote>
                <blockquote class="cars">
                    <img src="./assets/images/Products/ford.jpg" alt="ford" width="100%" height="33%"/><br/>
                    <h2> Ford Mustang Mach E
                       <br/> ₹70.00 lakhs (estimated)
                    </h2>
                </blockquote>
                <br/>
                <blockquote class="cars">
                    <img src="./assets/images/Products/hyundai-kona.jpg" alt="hyundai-kona" width="100%" height="33%"/><br/>
                    <h2> Hyundai Kona Electric 2022
                       <br/> ₹23.75 lakhs (estimated)
                    </h2>
                </blockquote>
                <blockquote class="cars">
                    <img src="./assets/images/Products/mersedes.jpg" alt="mersedes" width="100%" height="33%"/><br/>
                    <h2> Mercedes-Benz EQS
                       <br/> ₹1.75 Cr. (estimated)
                    </h2>
                </blockquote>
                <blockquote class="cars">
                    <img src="./assets/images/Products/tesla.jpg" alt="tesla#" width="100%" height="33%"/><br/>
                    <h2> Tesla Model X
                       <br/> ₹2.00 Cr. (estimated)
                    </h2>
                </blockquote>

            </div>
         </div>
        </>

    );
};

export default Upcomings;