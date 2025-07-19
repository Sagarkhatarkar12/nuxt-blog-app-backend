const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
userName :{
    type:String,
    required :true,
   unique: true

},
email :{
    type :String,
    required:true,
    unique: true
},
password:{
    type:String,
    required:true
},
  profileImage: { type: String },

})
module.exports = mongoose.model('Registration',registerSchema)