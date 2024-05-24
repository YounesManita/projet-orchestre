const mongoose=require("mongoose")
const CongéScchema=new mongoose.Schema({

    Datedebut:{
        type:String
    },
    DateFin:{
type:String
    },
    candidat:{
        type: mongoose.Schema.Types.ObjectId, ref: 'Condidat', required: true
    },
    acceptation:{
        type:Boolean,
        default:false
    }

})
module.exports = mongoose.model("congés", CongéScchema);