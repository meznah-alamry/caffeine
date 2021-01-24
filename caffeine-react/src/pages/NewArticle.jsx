import React from 'react';
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useState } from 'react';
import { Route, Redirect, useHistory } from "react-router-dom";

export default function NewArticle(props) {
    const [article, setArticle] = useState({});
    const history = useHistory();

    const onChangeInput = ({ target: { name, value } }) => {
        setArticle({ ...article, [name]: value });

    }

    const onsubmitNewArticle = (event) => {
        event.preventDefault();
        console.log('article after submit', article)
        //currentUser._id
        console.log(props.auth.currentUser._id)

        axios
            .post("http://localhost:5000/api/article/new-article", { ...article, id: props.auth.currentUser._id })
            .then((res) => {

                history.push("/");


            })
            .catch((err) => console.log(err));

    }

    if (props.auth.isLoggedIn) {

        return (
            <div className="NewProduct">
                <Form className="form">
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>
                            <b>Article Title</b>
                        </Form.Label>
                        <Form.Control type="text" placeholder="Type the title of article" name="title" onChange={(e) => onChangeInput(e)} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>
                            <b>Article</b>
                        </Form.Label>
                        <Form.Control as="textarea" rows={10} name="content" onChange={(e) => onChangeInput(e)} />
                    </Form.Group>

                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>
                            <b>Image</b>
                        </Form.Label>
                        <Form.Control type="text" placeholder="http://" name="img" onChange={(e) => onChangeInput(e)} />
                    </Form.Group>

                    <br />
                    <Button className="btn-add-product" variant="secondary" size="sm" onClick={(e) => onsubmitNewArticle(e)}>
                        Add to articles
                    </Button>
                </Form>
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
