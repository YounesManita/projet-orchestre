const express = require("express");
const router = express.Router();
const repetitionController = require("../Controllers/RepitionControllers");


router.post("/postrepition", repetitionController.createRepetition);

router.get("/getallrepition", repetitionController.getAllRepetitions);


router.patch("/updaterepition/:id",  repetitionController.updateRepetition);
router.put("/marquerpresence/:id",  repetitionController.marquerpresencerepition);
router.put("/marquerabsance/:id",  repetitionController.marquerabssancerepition);


router.delete("/deleterepition/:id", repetitionController.deleteRepetition);

module.exports = router;