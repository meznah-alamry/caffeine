import React from 'react';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios'
import { Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

export default function ShowOneArticle(props) {
    const history = useHistory();

    const { article_id } = useParams()
    const [selectArtcile, setSelectArticle] = useState(props.selectArtcile)
    const { title, img, content} = selectArtcile
    console.log(selectArtcile)
    const articleId = selectArtcile._id;

    useEffect(() => {
        if (!title) {  
            axios.get('http://localhost:5000/api/article/')
                .then(res => {
                    let article = res.data.msg.find(ele => ele._id == article_id)
                    setSelectArticle(article)
                    //data.msg[0]._id
                    console.log(res.data)
                })
        }

    }, [])

 
    const deleteArticle = (articleId) => {
        
        axios.delete(`http://localhost:5000/api/article/${articleId}`)
          .then(data => {
            
            history.push('/articles')
          })
    
          
      }

    return (
        <>
        <div className="art1" style={{width:'60%', height:'500px', margin:'0 auto'}}>
            <img style={{height:'500px', width:'100%'}}
                src={img}
                alt=""
              />
              
              <h1>{title}</h1>
              <p>{content}</p>

              {props.auth.isLoggedIn ? <>

              {props.auth.currentUser._id===selectArtcile.user ? <>
                
                <Button variant="outline-warning" onClick={()=>deleteArticle(articleId)}>Delete</Button>
                
                </> : <>
                
                </>} </> : <></>}
              
             
        </div>
        </>
    )
}
