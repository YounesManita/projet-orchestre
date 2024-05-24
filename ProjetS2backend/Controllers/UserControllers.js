const User= require("../Models/Users")
const bcrypt=require("bcryptjs")
const jwt=require("jsonwebtoken")
const dotenv=require('dotenv')
const Candidat = require("../Models/Candidat")
dotenv.config()

exports.login = async (req, res) => {
    try {
  
        const existemail = (req.body.email.toLowerCase()).trim()
        const existechoris=await Candidat.findOne({ email: existemail})
        const query = { email: existemail };
        if (existechoris) {
          query.candidatId = existechoris._id;
        }
        
        const existeuser = await User.findOne({
          $or: [
            { email: existemail },
            { candidatId: query.candidatId }
          ]
        });
        
        
        if (!existeuser) {
            return res.status(401).json("Check your email .");
        }
        const providedPassword = req.body.password;
        const passwordValid = await bcrypt.compare(providedPassword, existeuser.password);

        if (!passwordValid) {
            return res.status(401).json("Check your  password.");
        } 
       else{

        const payload = {
            id: existeuser._id,
            role: existeuser.role
        };

            const token =  jwt.sign(payload, process.env.secretOrPrivateKey);
      return  res.status(200).json({ resultat: existeuser, token: token, message: "Sign in successful." });
        }
    } catch (error) {
        console.error(error);
        res.status(400).json("Failed to sign in.");
    }
}
exports.changepassword=async(req,res)=>{
  try {
const id=req.params.id
const salt = await bcrypt.genSalt(10);
const hashed = await bcrypt.hash(req.body.password, salt);
 await User.findByIdAndUpdate({_id:id},{password:hashed},{new:true})
res.status(200).json({message:"password a ete changer avec succes "})
  }catch(erreur){
res.status(400).json({message:"error de changer password"})
  }
}