const mongoose = require("mongoose");



//define collection schema
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
})


//define model/collection of name User
const User= new mongoose.model("User",userSchema);

module.exports= User;