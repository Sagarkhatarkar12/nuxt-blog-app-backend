const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        default:"AnonyMous",
    },
    views:{
        type:Number,
        default:0,
    },
    likes:{
        type:Number,
        default :0,
    },
},{ timestamps:true

});
module.exports = mongoose.model('Posts',postSchema)