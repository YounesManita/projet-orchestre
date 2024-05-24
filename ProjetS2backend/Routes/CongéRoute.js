const express=require("express")
const router=express.Router()
const CongéControllers=require("../Controllers/CongeControllers")

router.post("/addconge", CongéControllers.createConge);
router.put("/accepterconge/:id", CongéControllers.accepterConge);
router.put("/refuserconge/:id", CongéControllers.refuserConge);
router.delete("/deleteconge/:id", CongéControllers.deleteConge);
router.get("/getallcongeconfirmer", CongéControllers.getCongesconfirmer);
router.get("/getcongeconfirmer", CongéControllers.getCongesnonconfirmer);



module.exports=router