const express=require("express")
const router =express.Router()
const usercontrollers=require("../Controllers/UserControllers")



router.post("/login",usercontrollers.login)
router.put("/changerpassword/:id",usercontrollers.changepassword)
module.exports=router