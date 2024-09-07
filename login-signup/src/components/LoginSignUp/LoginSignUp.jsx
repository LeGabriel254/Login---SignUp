import React, { useState } from "react";
import './LoginSignUp.css'

import person_icon from '../assets/name.png'
import password_icon from '../assets/password.png'
import email_icon from  '../assets/email.png'


const LoginSignUp = () =>{
  //state for Login - Sign Up inputs
  const [action,setAction] = useState("Sign Up")
  const [Name,setName]=useState('')
  const [Email,setEmail]=useState('')
  const [Password,setPassword]=useState('')
  const [error, setError,] = useState(''); //Initialise error message
const [success,setSuccess]= useState('')
  const onClick=(e)=>{
    e.preventDefault();
       // Validation checks
       if (action !== "Sign Up" && !Name.trim()) {
        setError("Name is required.");
        return;
      }
      if (!Email.trim()) {
        setError("Email is required.");
        return;
      }
      if (!Password.trim()) {
        setError("Password is required.");
        return;
      }

      setError(''); // Clear any previous errors
      setSuccess('Form submitted successfully!');
      {success && <div className="success-message">{success}</div>}
      console.log("Signed up successfuly", { Name, Password, Email })
  }
 



  return(
  <div onSubmit={onClick} className="container">
    <div className="header">
      <div className="text">{action}</div>
      <div className="underline"></div>
    </div>
    <div className="inputs">
      {action==="Login"?<div></div>:<div className="input">
         <img src={person_icon} alt="" />
         <input type="text" placeholder="Name" onChange={(e)=>setName(e.target.value)}/>
      </div>}

        {/* Display error message if present */}
        {error && <div className="error-message">{error}</div>}

      <div className="input">
         <img src={email_icon} alt="" />
         <input type="email"  placeholder="Email" onchange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div className="input">
         <img src={password_icon} alt="" />
         <input type="password"  placeholder="Password" onchange={(e)=>setPassword(e.target.value)}/>
      </div>
    </div>
    {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
    
    <div className="submit-container">
      <button className={action==="Login"?"submit gray":"submit"} type="submit" onClick={()=>{setAction("Sign Up")}}>Sign Up</button>
      <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
    </div>
  </div>
  )
};

export default LoginSignUp;