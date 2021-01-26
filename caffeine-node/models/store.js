const mongoose = require('mongoose')


const storeSchema = new mongoose.Schema({
      productId: {type: mongoose.Schema.Types.ObjectId, ref: 'product'},
      qty: Number
  },
  {timestamps :true})


const User = mongoose.model('User' , userSchema)
module.exports = User