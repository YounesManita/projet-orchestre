const ConcertModel=require("../Models/ConcertModel")
exports.ajouterConcerts=async(req,res)=>{
    try {
        const existeconcert=await  ConcertModel.findOne({
            Date:req.body.date,
                lieu:req.body.lieu
        })
        if(existeconcert){
            res.status(401).json("Concert déja existe svp choisi un autre date ou un autre lieu !!!!")
        }else{
            const new_concert=new ConcertModel(req.body)
            const response=await new_concert.save()
            res.status(200).json({resultat:response,message:"concert ajouter avec suuces"})
        }
    } catch (error) {
        console.log(error);
        res.status(400).json("error d'ajouter un concert ")
    }
}
exports.getAllConcert=async(req,res)=>{
    try {
        const allConcert=await ConcertModel.find()
        res.status(200).json(allConcert)
    } catch (error) {
        console.log(error);
        res.status(400).json("error de get all concert ")
        
    }
}
exports.getoneconcert=async(req,res)=>{
    try {
        const idconcert=req.params.idconcert
        const oneConcert=await ConcertModel.findById(idconcert)
        res.status(200).json(oneConcert)
    } catch (error) {
        console.log(error);
        res.status(400).json("error de get concert")
    }
}
exports.deleteConcert=async(req,res)=>{
    try {
        const idconcert=req.params.idconcert
        await ConcertModel.findByIdAndDelete({_id:idconcert})
        res.status(200).json("concert a su^primer avec sucees ")
    } catch (error) {
        console.log(error);
        res.status(400).json("error de suprimer le concert ")
    }
}
exports.modifierConcert=async(req,res)=>{
    try {
        const updateconcert={
            Date:req.body.date,
            lieu:req.body.lieu
        }
        await ConcertModel.findByIdAndUpdate({_id:req.params.idconcert},{...updateconcert},{
            new:true
        })
        res.status(200).json("concert a ete modifier avec succes ")
        
    } catch (error) {
        
        console.log(error);
        res.status(400).json("error de modifier le concert ")
    }
}

exports.marquerpresenconcert=async(req,res)=>{
    try {
        const absance={
            candidat:req.body.candidat,
            presence:"present"
        }
        const updateconcert=await ConcertModel.findByIdAndUpdate({_id:req.params.id},{$addToSet:{absance:absance}},{new:true})
        res.json({updateconcert})
    } catch (error) {
        
    }
}
exports.marquerabssanceconcert=async(req,res)=>{
    try {
        const absance={
            candidat:req.body.candidat,
            presence:"abssance"
        }
        const updateconcert=await ConcertModel.findByIdAndUpdate({_id:req.params.id},{$addToSet:{absance:absance}},{new:true})
        res.json({updateconcert})
    } catch (error) {
        
    }
}
exports.getstatuscandidat=async (req, res) => {
    try {
        const concertId = req.params.id;
        const concert = await  ConcertModel.findById(concertId)
            .populate('absance.candidat') 
            .exec();

        if (!concert) {
            return res.status(404).json({ message: 'Concert not found' });
        }

    console.log(concert);
       

        res.json(concert.absance);
    } catch (error) {
        console.error('Error fetching candidates:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}