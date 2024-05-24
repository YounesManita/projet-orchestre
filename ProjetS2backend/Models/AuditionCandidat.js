const mongoose=require("mongoose")
const candidatAuditionSchema = new mongoose.Schema({
    extrait: { type: String, required: true },
    tessiture: { type: String, enum: ["base", "alto", "tenor", "soprano"], required: true },
    evaluation: { type: String, enum: ['a', 'b', 'c'], required: true },
    decision: { type: String, enum: ['retenu', 'enattente', 'nonretenu'], default: 'nonretenu', required: true },
    remarque: { type: String, required: true },
    audition: { type: mongoose.Schema.Types.ObjectId, ref: 'Audition'},
    ConfirmedEmail: { type:String,enum:['confirmer','infirmer'], default:'infirmer' },
})

module.exports = mongoose.model("Auditioncandidat", candidatAuditionSchema);