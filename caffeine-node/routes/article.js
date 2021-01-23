const express = require('express')
const router = express.Router()
const Article = require('../models/article')




























router.post("/new-article", (req, res) => {
  
    const { title ,content , img } = req.body;

    Article.create({ title :title , content:content , img:img }, (err, newArticle) => {
        console.log("new article: ", newArticle);
       
    });
});




module.exports = router