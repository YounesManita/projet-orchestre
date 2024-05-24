const express=require("express")
const router =express.Router()
const candAController=require("../Controllers/AuditionCandidat")
  

router.patch("/updCandA/:id",candAController.UpdateCandA)

router.delete("/deleteCanA/:id",candAController.DeleteCandA)

router.get("/getall",candAController.fetchCandAs)

router.get("/getAudCand/:id",candAController.getCandAById)


router.post("/addCandA",candAController.addCandA)



module.exports=router