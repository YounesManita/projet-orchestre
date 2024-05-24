
const mongoose=require('mongoose')
const Schema= mongoose.Schema
const CondidatSchema=new Schema( {
    email: { type: String, required: true, unique: true },
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    nomJeuneFille: { type: String },
    sexe: { type: String,  required: true },
    dateNaissance: { type: Date, required: true },
    Nationalite: { type: String, required: true },
    taille: { type: Number, required: true },
    telephone: { type: String, required: true,unique:true},
    cin: { type: String, required: true },
    situationPro: {
        type: String, required: true
    },
    
},
{
    timestamps:true
})

module.exports=mongoose.model("Condidat",CondidatSchema)
