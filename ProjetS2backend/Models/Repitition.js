const mongoose = require("mongoose");
const Repitition = new  mongoose.Schema({
    lieu:{
 type:String,
 required:true
    },
     date:{
type:Date,
required:true
     }, 
     heure_debut:{
type:String
     },
      heure_fin:{
type:String,

      },
  
      absance:[
        {candidat: { type: mongoose.Schema.Types.ObjectId, ref: 'Condidat', required: true},
       presence:{
        type:String
       }
       
    }
    
    ]
});

module.exports = mongoose.model("Repition", Repitition);