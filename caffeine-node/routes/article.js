const express = require('express')
const router = express.Router()
const Article = require('../models/article')

router.get("/", (req, res) => {
    Article.find()
      .then((articles) => {
        res.json({ msg: articles });
      })
      .catch((err) => res.json({ msg: err }));
  });

  router.post("/new-article", (req, res) => {
  
    const { title ,content , img } = req.body;

    Article.create({ title :title , content:content , img:img }, (err, newArticle) => {
        console.log("new article: ", newArticle);
       
    });

});


module.exports = router
