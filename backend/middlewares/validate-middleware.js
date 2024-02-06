
const validate= (schema)=>async(req,res,next)=>{
    try {
        const parseBody= await schema.parseAsync(req.body);

        req.body= parseBody;
        next();
    } catch (err) {
        // console.log(error.errors[0].message)

        const status =422;
        const message= "Fill the input properly"
        const extraDetails= err.errors[0].message;

        const error ={
            status,
            message,
            extraDetails
        }
        //res.status(400).json({msg: error.errors[0].message})
        console.log(error)
        next(error)
    }
}


module.exports=validate;