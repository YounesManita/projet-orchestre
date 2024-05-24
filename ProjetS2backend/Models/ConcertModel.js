const mongoose=require("mongoose")
const Schema=mongoose.Schema

const ConcertSchema=new Schema({
    Date:{
        type:String,
        required:true
    },
    lieu:{
        type:String,
        required:true
    },
Programme:{
    descriptio:{
        type:String
    },
    oeuvre:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"oeuvre"
    }],
    
    
},
Repition:[
    { type: mongoose.Schema.Types.ObjectId, ref: 'Repition', required: true }
 
   ],

absance:[
    {
   candidat: { type: mongoose.Schema.Types.ObjectId, ref: 'Condidat', required: true},
   presence:{
    type:String
   }
   
}

]
})
module.exports=mongoose.model("Concert",ConcertSchema)