const express = require("express");
const authController=require("../controllers/auth-controller");
const {registerSchema,loginSchema, ContactDetailsSchema} = require("../validator/auth-validator");
const validate = require("../middlewares/validate-middleware");

const router= express.Router();

router.get("/",authController.home);

router.post("/register",validate(registerSchema),authController.register);

router.post("/login",validate(loginSchema),authController.login);

// router.post("/contact",validate(ContactDetailsSchema),authController.contact);

module.exports= router;