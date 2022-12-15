const express=require("express")
const {registerUser, logiUser} = require("../controllers/userControllers")
const router=express.Router()


router.post("/",registerUser)
router.post("/login",logiUser)
module.exports=router