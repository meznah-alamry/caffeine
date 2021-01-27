import React from "react";
import { useState, useEffect } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import axios from "axios";
import { Link } from 'react-router-dom';
import LinesEllipsis from 'react-lines-ellipsis'

export default function Home(props) {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    axios.get('http://localhost:5000/api/article/')
      .then(res => {
        setArticles(res.data.msg)
      })
  }, [])


  const allArticles = articles.map((article,i) => {

    // console.log(article)
    if(i < 3){
    return (
      <Link to={`/${article._id}/article`} onClick={() => props.setSelectArticle(article)} style={{textDecoration:'none'
    }}>
        <div
         className="art"
         style={{
           backgroundImage: `url(${article.img})`,
           backgroundSize: 'cover'
           }} >
          <div class="img-artcile-shadow"/>
          <div style={{
            width: '100%',
            hight: '40%',
            position: 'absolute',
            bottom: '0',
            margin: '0px 0px 0px 5px'
          }}>
          <p className="art-title"   
           >
             {article.title}
           </p>
          </div>
        </div>
      </Link>
    )
  }
  })



  return (
    <div className="Home">
      <Container fluid className="container-section-ov">
        <Row>
          <div  className="header-img" >
             <div class="img-shadow"/>
             <h1>Welcome to caffeine website!</h1>
            </div>
        </Row>
        <Row>
          <div className="article-header">
            <Link to="/articles" style={{textDecoration:'none'}}> <h1>Articles</h1> </Link>
          </div>
        </Row>
        <Row>
          <div className="article-section">

            {allArticles}


          </div>
        </Row>

        <Row>
          <div className="article-header">
            <Link to="/articles" style={{textDecoration:'none'}}> <h1>Articles</h1> </Link>
          </div>
        </Row>
        <Row>
          <div className="article-section">

            {allArticles}


          </div>
        </Row>
      </Container>
    </div>
  );
}