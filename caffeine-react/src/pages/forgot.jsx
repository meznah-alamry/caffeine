import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Col, Row } from "react-bootstrap";
//new page
export default function Forgot(props) {
  const history = useHistory();
  const [credentials, setCredentials] = useState({  password: "" });

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setCredentials({
      ...credentials,
      [name]: value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/api/user/forgot", credentials)
      .then((res) => {
        console.log("Express backend /forgot response", res);

        const token = res.data.token;
        const msg = res.data.msg;

        if (token) {
          localStorage.setItem("jwtToken", token);
          props.loginCallback();
          history.push("/login");
        } else {
          console.log("Login error: ", msg);
        }
      });
  };

  return (
    <form>
                <h3>Reset your password</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input  onChange={(e) => onChangeInput(e)} type="email" className="form-control" name="email" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input   onChange={(e) => onChangeInput(e)} type="password" name="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>confirm your password</label>
                    <input   onChange={(e) => onChangeInput(e)} type="password" name="confirmPassword" className="form-control" placeholder="Enter password" />
                </div>


                <button  onClick={(e) => onSubmit(e)} type="submit" className="btn btn-primary btn-block">Submit</button>
                
            </form>

   
  );
}