const express = require("express");
const authController=require("../controllers/auth-controller");
const {ContactDetailsSchema} = require("../validator/auth-validator");
const validate = require("../middlewares/validate-middleware");

const FormRouter= express.Router();
FormRouter.post("/contact",validate(ContactDetailsSchema),authController.contact);


module.exports= FormRouter;