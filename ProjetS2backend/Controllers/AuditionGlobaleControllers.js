const moment = require('moment');
const Audglobal = require('../Models/AuditionGlobal');
const Candidat = require('../Models/Candidat');
const nodemailer=require("nodemailer")
const secretKey = 'your-secret-key';
const jwt = require("jsonwebtoken");
const { all } = require('../Routes/candidat');
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
exports.generateAuditionGlobal = async (req, res) =>{
    try{
                const Audition = [];
                const allCandidat = await Candidat.find();
                const heuredebut_audition = req.body.heuredebut_audition;
                const heureFin_audition = req.body.heureFin_audition;
                const heuredejeuner = req.body.heuredejeuner;
                const durerdejeuner = req.body.durerdejeuner;
                const date_premierjouraudition = req.body.date_premierjouraudition;
                const parsedDate = moment(new Date(date_premierjouraudition));
        
        const formatHeure = 'HH:mm';
        const seanceDureeMinutes = 30;
    const momentHeureDebut = moment(heuredebut_audition, formatHeure);
    const momentHeureFin = moment(heureFin_audition, formatHeure);
    const momentHeureDejeuner = moment(heuredejeuner, formatHeure);
    
        const dureeEnMinutes = momentHeureFin.diff(momentHeureDebut, 'minutes');
        const dureeDejeunerEnMinutes = durerdejeuner* 60;
    
    const nombreSeancesAvantDejeuner = Math.floor((dureeEnMinutes - dureeDejeunerEnMinutes) / seanceDureeMinutes);
    
    const momentFinDejeuner = momentHeureDejeuner.add(durerdejeuner, 'hours');
    const chevaucheDejeuner = momentFinDejeuner.isBetween(momentHeureDebut, momentHeureFin, null, '[]');
    
    const nombreSeancesApresDejeuner = chevaucheDejeuner ? nombreSeancesAvantDejeuner : nombreSeancesAvantDejeuner + 1;
    const nbrjour=Math.ceil(allCandidat.length/nombreSeancesApresDejeuner)
    console.log(nbrjour);
   
        let audition = {
            date: parsedDate.format('YYYY-MM-DD'),
            heureDebut: moment(heuredebut_audition, 'HH:mm').format('HH:mm'),
            heureFin: moment(heuredebut_audition, 'HH:mm').add(30, 'minutes').format('HH:mm'),
            candidat: allCandidat[0]._id,
        };
        let k = 1
        Audition.push(audition)
        let resultDate = audition.date
    for (let i = 0; i < nbrjour; i++) {
      
        let heurefin = moment(audition.heureFin, 'HH:mm');
        for (let j = k; j <allCandidat.length; j++){
            if (heurefin.isSame(moment(heureFin_audition, 'HH:mm')) || heurefin.isAfter(moment(heureFin_audition, 'HH:mm'))  ) {
                                 heurefin = moment(heuredebut_audition, 'HH:mm').format('HH:mm') 
                                 k=j
                                 resultDate =parsedDate.add(1, 'days').format('YYYY-MM-DD')
                                console.log(k);
                                console.log(j);
                            break
        }
        if(Audition.length == allCandidat.length){
            break
        }
                   else if (heurefin.isSame(moment(heuredejeuner, 'HH:mm'))) {
                    let audition1 = {
                        date:resultDate,
                        heureDebut: heurefin.add(durerdejeuner, 'hours').format('HH:mm'),
                        heureFin: heurefin.add(30, 'minutes').format('HH:mm'),
                        candidat: allCandidat[j]._id,
                    };
                    Audition.push(audition1);
                    
                } else {
                    let audition2 = {
                        date: resultDate,
                        heureDebut: heurefin.format('HH:mm'),
                        heureFin: heurefin.add(30, 'minutes').format('HH:mm'),
                        candidat: allCandidat[j]._id,
                    };
              
                    Audition.push(audition2);
               
                }
            }
    }
    for (let i= 0; i <Audition.length; i++){
        const aud = new Audglobal ({
            date: Audition[i].date,
            heureDebut:Audition[i].heureDebut,
           heureFin:Audition[i].heureFin,
           candidat:Audition[i].candidat
        })
        const result= await aud.save()
        const existCandidat= await Candidat.findById(Audition[i].candidat)
     
     
        const confirmationToken = await jwt.sign({ candidat: Audition[i].candidat}, secretKey, { expiresIn: '1d' });
            transporter.sendMail({
              from: 'younesmanita@gmail.com',
              to: existCandidat.email,
              subject: 'Audition planing!',
      
              html: `<b>Bonjour chere  ${existCandidat.nom} ${existCandidat.prenom}! </b><br> 
       
       <b> Votre audition : ${Audition[i].date} ${Audition[i].heureDebut} jusqu'a  ${Audition[i].heureFin}  </b> <a href="http://localhost:4200/confirmation-compte/${confirmationToken}">Cliquez ici pour confirmer votre présence</a>
      `
       }),
             async (err, succes) => {
                if (err) {
                  console.log(err);
                  return res.status(400).json(err)
                } else{
                    
                    console.log(succes);
                    
                }  }
              
    } res.status(200).json({message:"your mail has been send to  all candidat"})  
    }catch(e){
    console.log(e);
    }
    }

exports.confPre=async(req,res)=>{
try{
    const token = req.params.token
  const verify = jwt.verify(token, secretKey)
  const exitaud = await Audglobal.findOne({candidat:verify.candidat})
  if(exitaud){
    const updateaud= await  Audglobal.findByIdAndUpdate({_id:exitaud._id}, {confirmer:"confirmer"},{new:true})
return res.status(200).json({resultat:updateaud,message:"updated success"})
}
}catch(e){
    res.status(400).json({resultat:e,message:"FAILED"})
}
}
exports.addAudManuel= async (req, res) =>{
    try{
               var allCandidat= [];
               await Promise.all(req.body.getCandidat.map(async (element) => {
                console.log(element);
                const existCandidat = await Candidat.findOne({ email: element });
                console.log(existCandidat);
                allCandidat.push(existCandidat);
                await Audglobal.deleteOne({candidat:existCandidat._id });
            }));
                console.log(allCandidat);
                const Audition = [];
                const heuredebut_audition = req.body.heuredebut_audition;
                const heureFin_audition = req.body.heureFin_audition;
                const heuredejeuner = req.body.heuredejeuner;
                const durerdejeuner = req.body.durerdejeuner;
                const date_premierjouraudition = req.body.date_premierjouraudition;
                const parsedDate = moment(new Date(date_premierjouraudition));
        
        const formatHeure = 'HH:mm';
        const seanceDureeMinutes = 30;
        const momentHeureDebut = moment(heuredebut_audition, formatHeure);
        const momentHeureFin = moment(heureFin_audition, formatHeure);
    const momentHeureDejeuner = moment(heuredejeuner, formatHeure);
    
        const dureeEnMinutes = momentHeureFin.diff(momentHeureDebut, 'minutes');
        const dureeDejeunerEnMinutes = durerdejeuner* 60;
    
    const nombreSeancesAvantDejeuner = Math.floor((dureeEnMinutes - dureeDejeunerEnMinutes) / seanceDureeMinutes);
    const momentFinDejeuner = momentHeureDejeuner.add(durerdejeuner, 'hours');
    const chevaucheDejeuner = momentFinDejeuner.isBetween(momentHeureDebut, momentHeureFin, null, '[]');
    const nombreSeancesApresDejeuner = chevaucheDejeuner ? nombreSeancesAvantDejeuner : nombreSeancesAvantDejeuner + 1;
    const nbrjour=Math.ceil(allCandidat.length/nombreSeancesApresDejeuner)
    console.log(nbrjour);
    console.log(nombreSeancesApresDejeuner);
        let audition = {
            date: parsedDate.format('YYYY-MM-DD'),
            heureDebut: moment(heuredebut_audition, 'HH:mm').format('HH:mm'),
            heureFin: moment(heuredebut_audition, 'HH:mm').add(30, 'minutes').format('HH:mm'),
            candidat: allCandidat[0]._id,
        }
        let k = 1
        Audition.push(audition)
        let resultDate = audition.date
    for (let i = 0; i < nbrjour; i++) {
      
        let heurefin = moment(audition.heureFin, 'HH:mm');
        for (let j = k; j <allCandidat.length; j++){
            if (heurefin.isSame(moment(heureFin_audition, 'HH:mm')) || heurefin.isAfter(moment(heureFin_audition, 'HH:mm'))  ) {
                                 heurefin = moment(heuredebut_audition, 'HH:mm').format('HH:mm') 
                                 k=j
                                 resultDate =parsedDate.add(1, 'days').format('YYYY-MM-DD')
                                console.log(k);
                                console.log(j);
                            break
        }
        if(Audition.length == allCandidat.length){
            break
        }
                   else if (heurefin.isSame(moment(heuredejeuner, 'HH:mm'))) {
                    let audition1 = {
                        date:resultDate,
                        heureDebut: heurefin.add(durerdejeuner, 'hours').format('HH:mm'),
                        heureFin: heurefin.add(30, 'minutes').format('HH:mm'),
                        candidat: allCandidat[j]._id,
                    };
                    Audition.push(audition1);
                    
                } else {
                    let audition2 = {
                        date: resultDate,
                        heureDebut: heurefin.format('HH:mm'),
                        heureFin: heurefin.add(30, 'minutes').format('HH:mm'),
                        candidat: allCandidat[j]._id,
                    };
              
                    Audition.push(audition2);
               
                }
            }
    }
    for (let i= 0; i <Audition.length; i++){
        const aud = new Audglobal ({
            date: Audition[i].date,
            heureDebut:Audition[i].heureDebut,
           heureFin:Audition[i].heureFin,
           candidat:Audition[i].candidat
        })
        const result= await aud.save()
       const existCandidat= await Candidat.findById(Audition[i].candidat)
            transporter.sendMail({
              from: 'younesmanita@gmail.com',
              to: existCandidat.email,
              subject: 'Audition planing!',
      
              html: `<b>Bonjour chere  ${existCandidat.nom} ${existCandidat.prenom}! </b><br> 
       
       <b> Votre audition : ${Audition[i].date} ${Audition[i].heureDebut} jusqu'a  ${Audition[i].heureFin}</b>
      `
            }),
             async (err, succes) => {
                if (err) {
                  console.log(err);
                  return res.status(400).json(err)
                } else{
                    
                    console.log(succes);
                    
                }  
              }
    } res.status(200).json({message:"your mail has been send to  all candidat"})  
    }catch(e){
    console.log(e);
    }
    }

    exports.getallauditionglobal=async(req,res)=>{
        try { 
          const allaudition=await Audglobal.find()
        
          res.status(200).json({model:allaudition})
          
        } catch (error) {
          res.status(400).json(error)
        }
      }






