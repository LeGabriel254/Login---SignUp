import React, { useState } from "react";
import './LoginSignUp.css'

import person_icon from '../assets/name.png'
import password_icon from '../assets/password.png'
import email_icon from  '../assets/email.png'
const LoginSignUp = () =>{
  const [action,setAction] = useState("Sign UP")
  return(
  <div className="container">
    <div className="header">
      <div className="tex">{action}</div>
      <div className="underline"></div>
    </div>
    <div className="inputs">
      {action==="Login"?<div></div>:<div className="input">
         <img src={person_icon} alt="" />
         <input type="text" placeholder="Name"/>
      </div>}
      
      <div className="input">
         <img src={email_icon} alt="" />
         <input type="email"  placeholder="Email"/>
      </div>
      <div className="input">
         <img src={password_icon} alt="" />
         <input type="password"  placeholder="Password"/>
      </div>
    </div>
    {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
    
    <div className="submit-container">
      <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
      <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
    </div>
  </div>
  )
};

export default LoginSignUp;