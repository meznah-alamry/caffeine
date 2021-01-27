const express = require('express')
const router = express.Router()
const Article = require('../models/article')

router.get("/", (req, res) => {
    Article.find().populate('user').sort({updatedAt: -1}).exec()
      .then((articles) => {
        res.json({ msg: articles });
      })
      .catch((err) => res.json({ msg: err }));
  });

  router.post("/new-article", (req, res) => {
  
    const { title ,content , img } = req.body;
    const user = req.body.id;

    Article.create({ title :title , content:content , img:img, user: user}, (err, newArticle) => {

        console.log("new article: ", newArticle);
        res.json({msg: "add article", newArticle})
       
    });

});

router.put("/:articleId", (req, res) => {
  let articleId = req.params.articleId
  Article.findOne({_id: articleId})
  .then(art=>{
    let updateViews = parseInt(art.views)+1
    console.log(art.views)
    Article.updateOne({ _id :articleId },{ views: ` ${updateViews}`}, (err, newUser) => {
      // console.log('number of views ', newUser)


});
  })
 

});

router.delete('/:articleId' , (req, res)=>{


  let articleId = req.params.articleId

  Article.findByIdAndDelete(articleId)
  .then(article => {
    res.json({msg: "article deleted !", article: article})
  })

})



module.exports = router
