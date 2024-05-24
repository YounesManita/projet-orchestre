const express=require("express")
const router=express.Router()
const Controllersprecandidat=require("../Controllers/precandidatControllers")

router.post("/addprecandiat", Controllersprecandidat.sendcondudaturemail)
router.post("/lancersaison", Controllersprecandidat.sendmailpourlancementaudition)
router.put("/confirmedcompte/:token", Controllersprecandidat.validationemail)
router.get('/allprecandidat',Controllersprecandidat.getaalprecandidat)

module.exports=router