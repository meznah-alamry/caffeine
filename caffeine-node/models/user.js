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
    img : {
        type :String 
       
    },
    isAdmin: {
        type: Boolean,
        default: false
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
