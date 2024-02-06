const mongoose = require("mongoose");
const bcrypt= require("bcryptjs");
const jwt= require("jsonwebtoken");

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
        type:String,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
})

//run everytime before saving data to database
userSchema.pre('save',async function(next){

    const user= this;

   if(!user.isModified("password"))
   {
    next();
   }

   try {
    const salt_round= await bcrypt.genSalt(10);
    const hash_password=await bcrypt.hash(user.password,salt_round);

    user.password= hash_password;
    
   } catch (error) {
    next(error)
   }
})


userSchema.methods.generateToken = async function(){
    return jwt.sign({
        userId: this._id.toString(),
        email:this.email,
    },process.env.TOKEN_SECRET_KEY,{expiresIn:"30d"})
}


//compare password for login
userSchema.methods.comparePassword = async function(password,next){
    try {
        // console.log(password)
        // console.log(this.password)
        return bcrypt.compare(password,this.password)
    } catch (error) {
        next(error)
    }
}
//define model/collection of name User
const User= new mongoose.model("User",userSchema);

module.exports= User;