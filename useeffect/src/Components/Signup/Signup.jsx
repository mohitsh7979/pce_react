import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  
  const [user,setUser] = useState({
    username:'',
    email:'',
    password:'',
    confirmPassword:''
  });

  function getinput(event){
     
     const {name,value} = event.target;
     console.log(name,value)
  }



  function handlesubmit(event) {
    event.preventDefault();
    user.push(SignupDetail);
    console.log(user)
    localStorage.setItem("UserDetail",JSON.stringify(user))
    setusername('')
    setemail('')
    setpassword('')
    setconfirmpassword('')
  }

  // function getUsername(event){
  //    setusername(event.target.value)

  // }
  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form action="#"  method="post">
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={user.username}
            onChange={getinput}
            name="username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value=""
            onChange={getinput}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value=""
            onChange={getinput}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value=""
            onChange={getinput}
            required
          />
        </div>
        <button type="submit" onClick={handlesubmit} className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
