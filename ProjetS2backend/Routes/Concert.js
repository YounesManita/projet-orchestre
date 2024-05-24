const express=require("express")
const router =express.Router()
const concertController=require("../Controllers/ConcertControllers")

router.post("/addconcert",concertController.ajouterConcerts)
router.get("/getallconcert",concertController.getAllConcert)
router.get("/getconcert/:idconcert", concertController.getoneconcert)
router.get("/getcandidatstatus/:id", concertController.getstatuscandidat)
router.put("/updateconcert/:idconcert", concertController.modifierConcert)
router.delete("/deleteconcert/:idconcert", concertController.deleteConcert)
router.put("/marquerpresence/:id",concertController.marquerpresenconcert)
router.put("/marquerabsence/:id",concertController.marquerabssanceconcert)

module.exports=router

