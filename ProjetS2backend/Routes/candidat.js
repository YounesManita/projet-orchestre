const express = require("express")
const router = express.Router()
const Controllerscandidat = require("../Controllers/condidatcontrollers")

router.post("/addcandiat", Controllerscandidat.createcandidat)
router.get("/getallcandiat", Controllerscandidat.getAllCandidat)
router.post("/getCandBasoin", Controllerscandidat.getCandBasoin)
router.post("/confirmation/:token", Controllerscandidat.confirmation)


module.exports=router