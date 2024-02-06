const mongoose = require("mongoose");


const contactSchema = new mongoose.Schema({
    username:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
});

const ContactInfo= new mongoose.model("ContactInfo",contactSchema);

module.exports= ContactInfo;