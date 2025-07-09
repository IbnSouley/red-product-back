const express = require('express'); 
const router = express.Router(); 


const SignUp = require("../Controllers/SIgnUp");
const Login = require("../Controllers/Login");
const Auth = require("../controllers/Auth");
const User = require("../Controllers/User");


router.post("/signUp", SignUp)
router.post("/login", Login);
router.post("/auth", Auth);
router.post("/user", User);

module.exports = router; 