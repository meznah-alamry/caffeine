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
    const user = req.body.id;
    // const user = req.params.id;


    Article.create({ title :title , content:content , img:img, user: user}, (err, newArticle) => {

        console.log("new article: ", newArticle);
       
    });

});

router.delete('/:articleId' , (req, res)=>{


  let articleId = req.params.articleId

  Article.findByIdAndDelete(articleId , function (err, article) { 
    if (err){ 
        console.log(err) 
    } 
    else{ 
        console.log("Deleted !"); 
    } 
}); 
})



module.exports = router
