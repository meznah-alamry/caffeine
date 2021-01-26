import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Alert , Button , Form } from "react-bootstrap";
import { Formik, Form as FormikForm, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from 'yup';

export default function Singup(props) {
  // const history = useHistory();

  // const [user, setUser] = useState({}); // user info
  // const [register, setRegister] = useState(true); // to show aleart

  // //to add the input inside user
  // const onChangeInput = ({ target: { name, value } }) => {
  //   setUser({ ...user, [name]: value });
  // };
  // to add the user info to database
  // const onSubmit = (event) => {
  //   event.preventDefault();

  //   axios
  //     .post("http://localhost:5000/api/user/register", user)
  //     .then((res) => {
  //       const user = res.data.user;
  //       if (user) {
  //         history.push("/login");
  //       } else {
  //         setTimeout(() => {
  //           setRegister(false);
  //         }, 1000);
  //       }
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <>
      <div className="cont">
        <Formik
        
         onSubmit ={values =>{console.log(values)}}
        
        >
          <FormikForm className="form">
            <h3>Sign Up</h3>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
              as={Field}
              placeholder="Enter name"
              name="name" />
              </Form.Group>

              <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control 
              as={Field}
              name="eamil"
              type="email"
              placeholder="Enter email" />
               </Form.Group>


              <Form.Group controlId="formBasicEmail">
              <Form.Label>Password</Form.Label>
              <Form.Control
              as={Field}
              type="password"
              name="password"
              placeholder="Password" />
               </Form.Group>


             <Button
             variant="primary"
              type="submit"
               >
              Sign up
            </Button>
          </FormikForm>
        </Formik>
      </div>
    </>
  );
}
