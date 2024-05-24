const mongoose = require("mongoose");
const Precandidat = new  mongoose.Schema({
    email: { type: String, required: true, unique: true },
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    confirmer:{
        type:Boolean,
        default:false
    }
});

module.exports = mongoose.model("Precandidat", Precandidat);