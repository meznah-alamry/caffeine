import React from 'react';
import {useParams} from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from 'axios'

export default function ShowOneArticle(props) {

    const { article_id } = useParams()
    const [selectArtcile, setSelectArticle] = useState(props.selectArtcile)
    const { title, img, content} = selectArtcile
    console.log(selectArtcile)

    useEffect(() => {
        if (!title) {  
            axios.get('http://localhost:5000/api/article/')
                .then(res => {
                    let article = res.data.find(ele => ele._id == article_id)
                    setSelectArticle(article)
                })
        }

    }, [])

    return (
        <>
        <div className="art1">
            <img
                src={img}
                alt=""
              />
              
              <h1>{title}</h1>
              <p>{content}</p>
             
        </div>
        </>
    )
}
