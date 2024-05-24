const CandAud =require("../Models/AuditionCandidat")
const Audition =require("../Models/AuditionGlobal")
const candidat =require("../Models/Candidat")

exports.addCandA= async(req, res) => {
    const candA = new CandAud(req.body);
   await  candA
      .save()
      .then(() =>
        res.status(201).json({
          model: candA,
          message: "Created!",
        })
      )
      .catch((error) => {
        res.status(400).json({
          error: error.message,
          message: "Données invalides",
        });
      });
  }
  exports.fetchCandAs =async (req,res)=>{
   await  CandAud.find()
      .populate({path:"audition", populate :{
        path:"candidat"
      }}) 
        .then((candAs) =>
          res.status(200).json({
            model: candAs,
            message: "success",
          })
        )
        .catch((error) => {
          res.status(400).json({
            error: error.message,
            message: "probleme d'extraction",
          });
        });
      }
  
  
    
  exports.getCandAById=async(req,res)=>{
     await  CandAud.findOne({_id:req.params.id})
      .populate({path:"audition",path:"candidat"})     
      .then((candAs) => {
        if(!candAs){
          res.status(404).json({
            message:"candidat Audition non trouve"
          })
          return
        }
       res.status(200).json({
        model: candAs,
        message:"objet trouve"
       })
     })
     .catch((error) => {
     
       res.status(400).json({
         error:error.message,
         message:"probleme ",
       });
     });
    }
    
   
  
    exports.UpdateCandA = async(req, res) => {
  await   CandAud.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((candA) => {
        if (!candA) {
          res.status(404).json({
            message: "candidat audition not found",
          });
          return;
        }
  
        return CandAud.populate(candA, { path: 'audition' });
      })
      .then((populatedCandA) => {
        res.status(201).json({
          model: populatedCandA,
          message: "Updated!",
        });
      })
      
      .catch((error) => {
        res.status(400).json({
          error: error.message,
          message: "candidat audition not correct",
        });
      });
  };
  
  
  
  exports.DeleteCandA=async(req, res) => {
  await   CandAud.deleteOne({ _id: req.params.id })
        .then(() => 
        res.status(200).json({ message: "candidat audition deleted" }))
        
        .catch((error) => {
          res.status(400).json({
            error: error.message,
            message: "Id candidat audition not correct ",
          });
        });
    }