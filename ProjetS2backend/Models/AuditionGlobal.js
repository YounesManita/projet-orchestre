const mongoose = require("mongoose");
let auditionSchema = new mongoose.Schema({
    date: { type: Date, required: true  },
    heureDebut: { type: String, required: true },
    heureFin: { type: String, required: true },
    candidat: { type: mongoose.Schema.Types.ObjectId, ref: 'Condidat', required: true, },
    confirmer:{ type: String, enum:["confirmer","infirmer"] ,default:"infirmer"},
});

auditionSchema.pre('save', function (next) {
    if (auditionSchema.heureDebut && typeof auditionSchema.heureDebut === 'String') {
        auditionSchema.heureDebut = new Date(auditionSchema.heureDebut);
    }
    if (auditionSchema.heureFin && typeof auditionSchema.heureFin === 'String') {
        auditionSchema.heureFin = new Date(auditionSchema.heureFin);
      }
    next();
  });
module.exports = mongoose.model("Audition", auditionSchema);