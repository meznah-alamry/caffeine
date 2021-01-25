import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Row, Form, Col, Button, Alert } from "react-bootstrap";
import axios from "axios";

export default function Singup(props) {
  const history = useHistory();

  const [user, setUser] = useState({}); // user info
  const [register, setRegister] = useState(true); // to show aleart

  //to add the input inside user
  const onChangeInput = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  // to add the user info to database
  const onSubmit = (event) => {
    event.preventDefault();
    
    axios
      .post("http://localhost:5000/api/user/register", user)
      .then((res) => {
        const user = res.data.user;
        if (user) {
          history.push("/login");
        } else {
          setTimeout(() => {
            setRegister(false);
          }, 1000);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {!register && (
        <Alert variant={"danger"}>
          The email is already in use. Please change the email
        </Alert>
      )}
      <div className="cont">
        <div className="form">
      <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Name </label>
                    <input  onChange={(e) => onChangeInput(e)} type="name" className="form-control" name="name" placeholder="Enter name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input  onChange={(e) => onChangeInput(e)} type="email" className="form-control" name="email" placeholder="Enter email" />
                </div>

                <div className="form-group"> 
                    <label>Password</label>
                    <input   onChange={(e) => onChangeInput(e)} type="password"                  name="password" className="form-control" placeholder="Enter password" />
                </div>

            
               
                <button className="btn" variant="secondary" size="sm"  onClick={(e) => onSubmit(e)}type="submit" >Sign up</button>
                
            </form>

            </div>
            </div>
    </>
  );
}
