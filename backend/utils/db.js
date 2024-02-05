const mongoose = require("mongoose");


const URI=process.env.MONGODB_URI;
// const URI="mongodb://localhost:27017/mern_admin"

const connectDb = async()=>{
    try {
        await mongoose.connect(URI);
        console.log("DB is connected")
        
    } catch (error) {
        console.log("error");
        process.exit(0);
    }
   
}

module.exports=connectDb;