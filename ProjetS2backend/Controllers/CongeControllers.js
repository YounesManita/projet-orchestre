const mongoose = require("mongoose");
const Conge = require("../Models/CongéModel"); 

exports.createConge = async (req, res) => {
    try {
        const newConge = await Conge.create(req.body);
        res.status(200).json( newConge );
    } catch (err) {
        res.status(400).json({ success: false, message: err.message });
    }
};

exports.getCongesconfirmer = async (req, res) => {
    try {
        const congés = await Conge.find({
            acceptation: true
        }).populate("candidat");
        res.status(200).json(congés);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};
exports.getCongesnonconfirmer = async (req, res) => {
    try {
        const congés = await Conge.find({
            acceptation: false
        }).populate("candidat");
        res.status(200).json(congés );
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.accepterConge = async (req, res) => {
    try {
        const congé = await Conge.findByIdAndUpdate(req.params.id, { acceptation: true }, { new: true });
        if (!congé) {
            return res.status(404).json({ success: false, message: "Congé non trouvé" });
        }
        res.status(200).json({ success: true, data: congé });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


exports.refuserConge = async (req, res) => {
    try {
        const congé = await Conge.findByIdAndDelete({_id:req.params.id});
        if (!congé) {
            return res.status(404).json({ success: false, message: "Congé non trouvé" });
        }
        res.status(200).json("conger refuser avec suuces ");
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


exports.deleteConge = async (req, res) => {
    try {
        const congé = await Conge.findByIdAndDelete(req.params.id);
        if (!congé) {
            return res.status(404).json({ success: false, message: "Congé non trouvé" });
        }
        res.status(200).json({ success: true, message: "Congé supprimé avec succès" });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};