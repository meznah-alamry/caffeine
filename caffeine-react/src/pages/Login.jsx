import axios from "axios";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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
          history.push("/home");
        } else {
          console.log("Login error: ", msg);
        }
      });
  };

  return (
    <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input  onChange={(e) => onChangeInput(e)} type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input   onChange={(e) => onChangeInput(e)} type="password" className="form-control" placeholder="Enter password" />
                </div>

            

                <button  onClick={(e) => onSubmit(e)} type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>

   
  );
}
