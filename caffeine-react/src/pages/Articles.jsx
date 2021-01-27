import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import axios from "axios";
import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis'

export default function Articles(props) {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/article/')
      .then(res => {
        setArticles(res.data.msg)
      })
  }, [])


  const allArticles = articles.map(article => {

    // console.log(article)
    return (
      <Link
      onClick={() =>{
        props.oneArticleViews(article._id)
         props.setSelectArticle(article)}

    }
      to={`/${article._id}/article`}  style={{textDecoration:'none'}}>
        <div className="article-content">
          <img
            src={article.img}
            alt=""
          />
          <h1>{article.title}</h1>
          {/* <p>{article.content}</p> */}
          <LinesEllipsis className="content"
            text={article.content}
            maxLine='3'
            ellipsis='....  (Read More)'
            trimRight
          />
        </div>
      </Link>
    )
  })



  return (
    <div className="Articles">
      <Container fluid className="article-container-section">

        <Row>
          <div className="article-page">

            {allArticles}


          </div>
        </Row>
      </Container>
    </div>
  );
}