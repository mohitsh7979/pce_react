import React, { useState } from "react";
import "./Signup.css";

function Signup() {
  const [username, setusername] = useState("");
  const [useremail, setemail] = useState("");
  const [userpassword, setpassword] = useState("");
  const [userconfirmpassword, setconfirmpassword] = useState("");
  const [user,setUser] = useState([]);

  const SignupDetail = {

     username:username,
     email:useremail,
     password:userpassword,
     confirmPassword:userconfirmpassword
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
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
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
            value={useremail}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={userpassword}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={userconfirmpassword}
            onChange={(e) => {
              setconfirmpassword(e.target.value);
            }}
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
