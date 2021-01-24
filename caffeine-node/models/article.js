const mongoose = require('mongoose')


const articleSchema = new mongoose.Schema({
    title : {
        type :String , 
        required :true ,
    },
    content : {
        type :String , 
        required :true
    } , 
    img : {
        type :String , 
        required :true
    },

} , {timestamps :true})


const Article = mongoose.model('article' , articleSchema)
module.exports = Article