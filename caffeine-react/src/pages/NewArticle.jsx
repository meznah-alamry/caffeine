import React from 'react';
import { Form, Button, Alert } from "react-bootstrap";
import axios from "axios";
import { useState } from 'react';
import { Route, Redirect, useHistory } from "react-router-dom";
import { Formik, Form as FormikForm, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    title: Yup.string().required(" Title is required "),
    content: Yup.string().required(" Aticle content is required "),
    img: Yup.string().required(" Image for article is required "),
  })
  
  
export default function NewArticle(props) {
    const [article, setArticle] = useState({title: "", content:"", img:""});
    const history = useHistory();

    // const onChangeInput = ({ target: { name, value } }) => {
    //     setArticle({ ...article, [name]: value });

    // }

    const onSubmit = (values) => {
        // values.preventDefault();
        // console.log('article after submit', article)
        // //currentUser._id
        // console.log(props.auth.currentUser._id)

        axios
            .post("http://localhost:5000/api/article/new-article", { ...values, id: props.auth.currentUser._id })
            .then((res) => {

                history.push("/articles");


            })
            .catch((err) => console.log(err));

    }

    if (props.auth.isLoggedIn) {

        return (
            <div className="NewProduct">

                <Formik
                initialValues = {article}
                validationSchema={validationSchema}
                onSubmit = {values => onSubmit(values) }
                >

                <Form as={FormikForm} className="form">
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>
                            <b>Article Title</b>
                        </Form.Label>
                        <Form.Control  as={Field} type="text" placeholder="Type the title of article" name="title" />
                    </Form.Group>
                    <ErrorMessage name="title" render={(msg) =>  <Alert variant={"danger"}>
                    {msg}
                  </Alert>} />
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>
                            <b>Article</b>
                        </Form.Label>
                        <Form.Control as={Field}  rows={10} name="content" />
                    </Form.Group>
                    <ErrorMessage name="content" render={(msg) =>  <Alert variant={"danger"}>
                    {msg}
                  </Alert>} />
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>
                            <b>Image</b>
                        </Form.Label>
                        <Form.Control as={Field} type="text" placeholder="http://" name="img" />
                    </Form.Group>
                    <ErrorMessage name="img" render={(msg) =>  <Alert variant={"danger"}>
                    {msg}
                  </Alert>} />
                    <br />
                    <Button className="btn-add-product" type="submit" variant="secondary" size="sm" >
                        Add to articles
                    </Button>
                </Form>
                </Formik>
            </div>
        );
    } else {
        return (
            <Route>
                <Redirect to="/login" />
            </Route>
        );
    }
}
