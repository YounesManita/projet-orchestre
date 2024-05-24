const express = require("express")
const router = express.Router()
const ControllerAudition = require("../Controllers/AuditionGlobaleControllers")

router.post("/generateAudition", ControllerAudition.generateAuditionGlobal)
router.post("/addAudManuel", ControllerAudition.addAudManuel)
router.patch("/confpre/:token", ControllerAudition.confPre)
router.get("/getaudglobal",ControllerAudition.getallauditionglobal)


module.exports = router