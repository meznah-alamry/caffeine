import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Col, Row } from "react-bootstrap";

export default function Login(props) {
  const history = useHistory();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

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
      .post("http://localhost:5000/api/user/login", credentials)
      .then((res) => {
        console.log("Express backend /login response", res);

        const token = res.data.token;
        const msg = res.data.msg;

        if (token) {
          localStorage.setItem("jwtToken", token);
          props.loginCallback();
          history.push("/");
        } else {
          console.log("Login error: ", msg);
        }
      });
  };

  return (

    <div className= "cont">
    <form>
      <div className="form">
                <h3> Login </h3>

                <div >
                    <label>Email address</label>
                    <input  onChange={(e) => onChangeInput(e)} type="email" className="form-control" name="email" placeholder="Enter email" />
                </div>

                <div >
                    <label>Password</label>
                    <input   onChange={(e) => onChangeInput(e)} type="password" name="password" className="form-control" placeholder="Enter password" />
                </div>

            

                <button className="btn" onClick={(e) => onSubmit(e)} type="submit" >Login</button>
                <p className="forgot-password text-right">
                    Forgot <Link to ="/forgot">password?</Link>
                </p>
                </div>
            </form>

            </div>
  );
}
