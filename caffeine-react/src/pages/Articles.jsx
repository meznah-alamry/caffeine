import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Articles(props) {

    return (
        <>
            {props.article && (
                <Row>
                    <Col md="4" sm="4" className="mt-3">
                        <div className="">
                            <img
                                style={{
                                    width: '100%',
                                    maxWidth: '500px',
                                    minWheight: '250px',
                                    maxHeight: '250px'
                                }}
                                src={props.article.img}
                                alt=""
                            />
                            <Link to={`/${props.article._id}/article`} onClick={() => props.setSelectArticle(props.article)}  >
                                <h1 style={{ textDecoration: 'none', color: 'black' }}>{props.article.title}</h1>
                                <p style={{ textDecoration: 'none', color: 'black', textAlign: 'justify' }}>{props.article.content}</p>
                            </Link>
                        </div>
                    </Col>
                </Row>
            )}
        </>
    )
}
