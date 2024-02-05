const User = require("../models/user-model")

const home = async(req,res)=>{
    try {
        console.log(req.body)
        res.status(200).send("hi from auth // controller")
    } catch (error) {
        console.log(error);
    }
}

const register = async(req,res)=>{
    try {

        console.log(req.body)
        const {username,email,password,phone,isAdmin}=  req.body;

        const userExist = await User.findOne({email:email});
       // console.log(userExist)

        if(userExist){
            return res.status(400).json({msg:"user already registered"})
        }

        const userCreated = await User.create({username,email,password,phone,isAdmin});
        res.status(200).json({userData: userCreated})
    } catch (error) {
        console.log(error);
    }
}


module.exports={home,register};