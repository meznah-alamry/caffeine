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

    user: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},

    views: {
        type: String,
        default: '0'
    }

} , {timestamps :true})


const Article = mongoose.model('article' , articleSchema)
module.exports = Article