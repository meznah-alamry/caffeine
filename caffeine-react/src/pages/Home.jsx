import React from "react";
import { useState , useEffect } from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import axios from "axios";
import {Link} from 'react-router-dom';

export default function Home() {
  const [articles , setArticles] = useState([])

  useEffect(() => {
      axios.get('http://localhost:5000/api/article/') 
      .then(res =>{     
        setArticles(res.data.msg)
      })
  }, [])


 const  allArticles = articles.map(article =>{
      
  console.log(article)
   return (
    <Link to={`/${article._id}/article`}>
   <div className="art1">
   <img
     src={article.img}
     alt=""
   />
   <h1>{article.title}</h1>
   <p>{article.content}</p>
 </div>
 </Link>
 )
 }) 



  return (
    <div className="Home">
      <Container fluid className="container-section-ov">
        <Row>
          <Image src="https://i.imgur.com/STVyYtG.jpg" className="header-img" />
        </Row>
        <Row>
          <div class="article-header">
            <h1>Articles</h1>
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
