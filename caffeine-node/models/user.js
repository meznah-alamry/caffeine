const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
    email : {
        type :String , 
        required :true ,
    },
    password : {
        type :String , 
        required :true
    } , 
    name : {
        type :String , 
        required :true
    },
    products:[
    { oneProduct: {
        id: {type: mongoose.Schema.Types.ObjectId, ref: 'product'},
        qty: String
        
    }
}
]

} , {timestamps :true})


const User = mongoose.model('user' , userSchema)
module.exports = User