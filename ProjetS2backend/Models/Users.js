const mongoose=require("mongoose")


const UserSchema=new mongoose.Schema({

    role:{type:String , enum:['admin' , 'choriste' , 'Manager','chefpupitre','chefchoeur']},
    email:{type:String},
    statutAcutel:{type:String, enum: ['choriste','junior', 'senior', 'veteran', 'inactif']},
    EtatConge:{type:Boolean, default:false},
    candidatId:  { type: mongoose.Schema.Types.ObjectId, ref: 'Condidat' },
    historiqueStatut: [
      {
        saison: { type:Number },
        statut: { type: String },
        }],
    password:{type:String,required:true},
    confirmationStatus: { type: String, default: 'En attente de confirmation' },
    etat:{type:String,enum:['eliminer','nominer']}

      })

      module.exports = mongoose.model("Users", UserSchema);

    
