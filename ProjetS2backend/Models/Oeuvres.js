const mongoose=require("mongoose")
const Schema = mongoose.Schema 
const schemaoeuvre=new Schema({


    titre : {type:String , required : true},
    compositeur :[{type: String , required: true }],
    arrangeur :[{type:String, required:true}],
    anneeComposition :{type:Number , required:true},
    genre : { type: String ,required:true ,
    },
    presenceChoeur :{type : Boolean , default:true},
    parties:{type: String}



})
module.exports = mongoose.model("oeuvre", schemaoeuvre)