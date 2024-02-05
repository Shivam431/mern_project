const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async (req, res) => {
  try {
    console.log(req.body);
    res.status(200).send("hi from auth // controller");
  } catch (error) {
    console.log(error);
  }
};

const register = async (req, res) => {
  try {
    // console.log(req.body)
    const { username, email, password, phone, isAdmin } = req.body;

    const userExist = await User.findOne({ email: email });
    // console.log(userExist)

    if (userExist) {
      return res.status(400).json({ msg: "user already registered" });
    }
    const userCreated = await User.create({
      username,
      email,
      password,
      phone,
      isAdmin,
    });
    res.status(200).json({
      token: await userCreated.generateToken(),
      userID: userCreated._id.toString(),
    });
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userExist = await User.findOne({ email: email });

    if (!userExist) {
      return res.status(400).json({ msg: "INVALID CREDENTIALS" });
    }

    const isValid = await bcrypt.compare(password, userExist.password);

    if (isValid) {
      res.status(200).json({
        msg: "Login Successful",
        token: await userExist.generateToken(),
        userID: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ msg: "INVALID email or password" });
    }
  } catch (error) {
    res.status(500).json({ msg: "internal server error" });
  }
};

module.exports = { home, register, login };
