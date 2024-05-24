const express=require("express")
const router=express.Router()
const OeuvreControlers=require("../Controllers/OeuvreControllers")

router.post("/addoeuvre", OeuvreControlers.AddOeuvre);
router.put("/updateoeuvre/:id", OeuvreControlers.updateOeuvre);
router.delete("/deleteoeuvre/:id", OeuvreControlers.deleteoeuvre);
router.get("/getalloeuvre", OeuvreControlers.getOeuvre);
router.get("/getoneoeuvre/:id", OeuvreControlers.getOneoeuvre);



module.exports=router