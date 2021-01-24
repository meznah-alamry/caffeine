const mongoose = require('mongoose')


const productSchema = new mongoose.Schema({
    title : {
        type :String , 
        required :true ,
    },
    description : {
        type :String , 
        required :true
    } , 
    img : {
        type :String , 
        required :true
    },
    price : {
        type :String , 
        required :true
    },
    state : {
        type :String , 
        required :true
    },

} , {timestamps :true})


const Product = mongoose.model('product' , productSchema)
module.exports = Product