const candidat=require("../Models/Candidat")
const precandidat= require("../Models/precandidat")
const CandA= require("../Models/AuditionCandidat")
const Users= require("../Models/Users")
const path = require('path')
const audition= require("../Models/AuditionGlobal")
const secretKey = 'your-secret-key';
const jwt = require("jsonwebtoken");
const nodemailer =require("nodemailer")
var generator = require('generate-password');
const bcrypt=require('bcryptjs')
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "azzizzflash@gmail.com",
    pass: "fqzq vrwm yxnt yhze"
  },
  tls: {
    rejectUnauthorized: false,
  },
});
exports.createcandidat=async(req,res)=>{
    try {
        const email=req.body.email
        const validcandidat = await precandidat.findOne({ email: email })
        const existecandidat = await candidat.findOne({ email: email })
        if (!validcandidat){
            return res.status(401).send("vous n'est pas autoriser d'inscrit ")
        } else if (existecandidat){
            return res.status(402).send("vous ete déja inscrit ")
             }
       
            const newcandidat = new candidat(
                    {...req.body} )
            const response=await newcandidat.save()
            res.status(200).json({ resultat: response ,message:"candidat ajouter aves succes"})
        
    } catch (error) {
        console.log(error);
        res.status(400).json(error)
    }
}

exports.getAllCandidat=async(req,res)=>{
    try{
       
        const allCand= await candidat.find()
         console.log(allCand);
        res.status(200).json(allCand)

    }catch(e){

        res.status(400).json({result:allCand,message:"echec de l'extraction"})

    }
    
}


exports.getCandBasoin = async (req,res)=>{
try{
    const sop = req.body.sop;
    const alt = req.body.alt;
    const ten = req.body.ten;
    const bas = req.body.bas;
    console.log(sop);
    console.log(alt);
    console.log(ten);
    console.log(bas);
    let Tabtenor=[];
    let Tabsoprano=[];
    let Tabalto=[];
    let Tabbase=[];
    let tab = [];
    const tes = await CandA.find({
        decision: { $in: ["retenu", "enattente"] }
      }).populate({
        path: 'audition',
        populate: {
          path: 'candidat',
        }
      });
       var Tabt= tes.sort((a, b) => {
        const decisionOrder = {
          "retenu": 1,
          "enattente": 2
        };
        return decisionOrder[a.decision] - decisionOrder[b.decision];
    })

    Tabt.map( elem=>{
        if(elem.tessiture=="soprano"){
            Tabsoprano.push(elem)
        }
        if(elem.tessiture=="alto"){
            Tabalto.push(elem)
        }
        if(elem.tessiture=="tenor"){
            Tabtenor.push(elem)
        }
        if(elem.tessiture=="base"){
            Tabbase.push(elem)
        }
    }
    )
for (let i=0;i<sop;i++){
        tab.push(Tabsoprano[i])
}
for (let i=0;i<bas;i++){
        tab.push(Tabbase[i])
}
for (let i=0;i<alt;i++){
        tab.push(Tabalto[i])
}
for (let i=0;i<ten;i++){
        tab.push(Tabtenor[i])
}

tab.map(async (elem) => {
    if (elem && elem.audition && elem.audition.candidat) {
    
        const existChoriste = await audition.findOne({ candidat: elem.audition.candidat._id });
      if (existChoriste) {
        const confirmationToken = await jwt.sign({ audition: elem.audition._id }, secretKey, { expiresIn: '1d' });
        console.log(elem.audition.candidat.email);
        transporter.sendMail({
          from: "azzizzflash@gmail.com",
          to: elem.audition.candidat.email,
          subject: "[ FIRST STEP DONE - Acceptation Candidature Carthage Symphony Orchestra ]",
          attachments: [
            {
              filename: 'ocs.jpg',
              path: path.join(__dirname, '../documents/ocs.png'),
              encoding: 'base64',
              contentType: 'image/png',
              cid: 'unique@ocs.com',
            },
            {
              filename: 'Chart.pdf',
              path: path.join(__dirname, '../documents/Charte.pdf'),
              encoding: 'base64',
              contentType: 'application/pdf',
            },
          ],
          html: ` <img src="cid:unique@ocs.com" width="400"> <br><br>Cher <strong>${elem.audition.candidat.nom} ${elem.audition.candidat.prenom}</strong>,<br><br>
          Après avoir étudié votre candidature, nous avons le plaisir de vous informer que vous avez réussi la première étape du processus de recrutement.<br><br>
          Afin de procéder à la prochaine étape du processus, veuillez prendre un moment pour lire attentivement la charte de l'entreprise, jointe à ce courriel. Une fois que vous l'avez examinée en détail, nous vous prions de bien vouloir signer le document en bas de la page pour indiquer votre accord.<br><br>
          De plus, confirmez votre intégration en cliquant sur le lien d'acceptation indiquant votre accord.<br><br>
          Félicitations encore pour cette réussite, et nous attendons avec impatience de collaborer avec vous.<br><br>
          <a href="http://localhost:4200/confirmation-compte/${confirmationToken}">Cliquez ici pour confirmer votre e-mail</a>
          Cordialement,`,
        }, (err, info) => {
          if (err) {
            console.log(err);
            return res.status(400).json({
              message: {
                error: err
              }
            });
          }
          console.log(info);
        });
      }
    }
  });
res.status(200).json(tab);
}catch(e){
    console.log(e);
    res.status(500).json("erreur lors de l'extraction")
   
}

}
exports.confirmation = async (req, res) => {
  try {
    const token = req.params.token;
    const verify = jwt.verify(token, secretKey);
    const exitaudition = await CandA.findOne({ audition: verify.audition }).populate({
      path: 'audition',
      populate: {
        path: 'candidat',
      }
    });

    if (exitaudition) {
   
      await CandA.findOneAndUpdate(
        { audition: verify.audition },
        { ConfirmedEmail: "confirmer" },
        { new: true }
      );

      const existUser = exitaudition.audition.candidat._id;
      
      
      const existingUser = await Users.findOne({ candidatId: existUser });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

     
      const passwords = generator.generate({
        length: 10,
        numbers: true
      });

      
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(passwords, salt);

      
      const newUser = new Users({
        role: "choriste",
        candidatId: existUser,
        statutAcutel: "junior",
        historiqueStatut: [
          { saison: new Date(), statut: "junior" }
        ],
        password: hashed,
      });

      const response = await newUser.save();

      await transporter.sendMail({
        from: "azzizzflash@gmail.com",
        to: exitaudition.audition.candidat.email,
        subject: "[ Second STEP is DONE -]",
        html: `<br><br>Cher <strong>${exitaudition.audition.candidat.nom} ${exitaudition.audition.candidat.prenom}</strong>,<br><br>
        Après avoir étudié votre candidature, nous avons le plaisir de vous informer que vous avez réussi la première étape du processus de recrutement.<br><br>
        Votre email est: ${exitaudition.audition.candidat.email} et votre Password est: ${passwords}`,
      });

      return res.status(200).json({ res: response, message: "Choriste créé avec succès" });
    } else {
      return res.status(404).json({ message: "Audition not found" });
    }
  } catch (e) {
    console.log(e);
    return res.status(500).json({ message: "Une erreur s'est produite" });
  }
};
