import React from "react";

const Login = () => {
    return (
        <>
        <h1 className="login">Login / Sign in</h1>
        <div class="form" id="myForm">
            <form class="form-container" action="submit">
                <h1>Login</h1>
                <hr />
                <label htmlFor="email" className="text">Username</label> <br />
                <input type="text" name="email" placeholder="Enter Username" required/><br />
                <label htmlFor="psw"className="text">Password</label> <br />
                <input type="Password" name="psw" placeholder="Enter Password" required />
                <button type="submit" className="btn">Log in</button>
                <button type="button" className="btn cancel">Cancel</button>
                   <h2><a href="https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjUyNjI2Njg0LCJjYWxsc2l0ZV9pZCI6MjY5NTQ4NDUzMDcyMDk1MX0%3D"> <img src="./assets/images/fb.png" alt="continue with face book%3" className="fb"/></a>
                   <a href="https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue%26pli%3D1&ec=GAlAwAE&flowName=GlifWebSignIn&flowEntry=AddSession"> <img src="./assets/images/google.png" alt="continue with google%3" className="google"/></a></h2>
            </form>
        </div>
        <br />
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

export default Login;