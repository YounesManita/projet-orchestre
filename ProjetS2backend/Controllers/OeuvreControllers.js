const oeuvre=require("../Models/Oeuvres.js")


exports.AddOeuvre=async(req,res)=>{
    try {
        const existeOeuvre = await oeuvre.findOne({titre:req.body.titre})
     if(existeOeuvre){
        return res.status(401).json("oeuvre déja existe")
     }else{
            if (existeOeuvre) {
                return res.status(401).json("oeuvre déja existe")
            } else {
                const newOeuvre = new oeuvre({ ...req.body })
                const resultat = await newOeuvre.save()
                return res.status(200).json({ response: resultat, message: "oeuvre ajouter avec succes " })
            }
     }
     
        
    } catch (error) {
        console.log(error);
        res.status(300).json(error)

    }
}

exports.getOeuvre=async(req,res)=>{
    try{
        
        const liste = await oeuvre.find()
        res.status(200).json(liste)
        
    }catch(error){
        console.log(error);
        res.status(300).json(error)
    }

}

exports.updateOeuvre=async(req,res)=>{
    try {
        const updateoeuvre={
            titre:req.bod.titre,
            compositeur: req.bod.compositeur,
            arrangeur: req.bod.arrangeur,
            anneeComposition: req.bod.anneeComposition,
            genre: req.bod.genre,
            presenceChoeur: req.bod.presenceChoeur,
            parties: req.bod.parties
        }
const resultat=await oeuvre.findByIdAndUpdate({_id:req.params.id},{...updateoeuvre},{new:true})
  res.status(200).json({respone:resultat,message:"oeuvre modifier avec succes "})
    } catch (error) {
        console.log(error);
        res.status(300).json(error)
    }
}

exports.deleteoeuvre=async(req,res)=>{
    try {
        let id =req.params.id

        await oeuvre.findByIdAndDelete({_id:id})
        res.status(200).json("oeuvre suprimer avec succes ")

    } catch (error) {
        console.log(error);
        res.status(300).json(error)
    }
}

exports.getOneoeuvre=async(req,res)=>{
    try {
        const Oneoeuvre=await oeuvre.findById(req.params.id)
        res.status(200).json({respone:Oneoeuvre,message:"one oeuvre avec suuces"})
    } catch (error) {
        console.log(error);
        res.status(300).json(error)
    }
}
