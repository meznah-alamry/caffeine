const express = require('express')
const router = express.Router()
const Product = require('../models/product')

router.get("/products", (req, res) => {
    Product.find()
      .then((products) => {
        res.json({ msg: products });
      })
      .catch((err) => res.json({ msg: err }));
  });

router.post("/new-product", (req, res) => {
    console.log(req.body);
    const { title ,description , img ,price ,state } = req.body;

    Product.create({ title :title , description:description , img:img ,price: price , state: state}, (err, newP) => {
        console.log("new Product: ", newP);
       
    });
});




module.exports = router