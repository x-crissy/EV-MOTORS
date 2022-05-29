import React from "react";

 const Contact = () => {
    return (
        <>
           <div className="h1">
                <h1>Welcome to Inquiry Page!</h1> 
            </div>
                 <div className="inquiery">
                <div className="help">
                    <form action="submit"> <br />
                        <label htmlFor="Name"><b>Name</b></label> <br />
                        <input type="text" name="name" required /><br />
                        <label htmlFor="Phone"><b>Phone Number</b></label> <br />
                        <input type="number" name="Phone" required /><br />
                        <label htmlFor="Email"><b>Email</b></label> <br />
                        <input type="text" name="email" required /><br />
                        <label htmlFor="Question?"><b>Question?</b></label> <br />
                        <input type="text" name="Question?" required /><br />
                        <label htmlFor="Pincode"><b>Pincode</b></label> <br />
                        <input type="number" name="Pincode"/><br />
                        <button type="submit" className="btn"> Submit</button>
                    </form>    
                </div>  
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

export default Contact;