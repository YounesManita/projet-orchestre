const Repetition = require("../Models/Repitition");


exports.createRepetition=async(req, res) =>{
    try {
        const repetition = new Repetition(req.body);
        await repetition.save();
        res.status(201).json(repetition);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

exports.getAllRepetitions=async(req, res)=> {
    try {
        const repetitions = await Repetition.find();
        res.json(repetitions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}



exports.updateRepetition=async(req, res)=> {
  
    try {
      const repition=  await Repetition.findByIdAndUpdate({_id:req.params.id},{...req.body},{
            new:true
        })
        res.status(200).json("repition a ete modifier avec succes ")
        
        res.json(repition);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}


exports.deleteRepetition=async(req, res)=> {
    try {
        const idrep=req.params.id
        await Repetition.findByIdAndDelete({_id:idrep})
        res.status(200).json("repition a su^primer avec sucees ")
    } catch (error) {
        console.log(error);
        res.status(400).json("error de suprimer le concert ")
    }
}

exports.getRepetition=async(req, res, next) =>{
    try {
        const repetition = await Repetition.findById(req.params.id);
        if (repetition == null) {
            return res.status(404).json({ message: "Repetition not found" });
        }
        res.repetition = repetition;
        next();
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}
exports.marquerpresencerepition=async(req,res)=>{
    try {
        const absance={
            candidat:req.body.idcandidat,
            presence:"present"
        }
        const updaterepition=await Repetition.findByIdAndUpdate({_id:req.params.id},{$addToSet:{absance:absance}},{new:true})
        res.json({updaterepition})
    } catch (error) {
        
    }
}
exports.marquerabssancerepition=async(req,res)=>{
    try {
        const absance={
            candidat:req.body.idcandidat,
            presence:"abssance"
        }
        const updaterepition=await Repetition.findByIdAndUpdate({_id:req.params.id},{$addToSet:{absance:absance}},{new:true})
        res.json({updaterepition})
    } catch (error) {
        
    }
}
