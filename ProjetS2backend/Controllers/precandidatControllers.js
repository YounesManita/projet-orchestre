const precandidat=require("../Models/precandidat")
 const jwttoken=require("jsonwebtoken")
const nodemailer=require("nodemailer");

const secretOrPrivateKey="lskdjlksdfhskfdhksfdhskjfdhskfd"
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
exports.sendcondudaturemail=async(req,res)=>{
try {
          const {firstName,lastName,Email}=req.body
          const existecandidat = await precandidat.findOne({
            email: Email
          })
          if(existecandidat){
            return res.status(409).json({message:"Cet utilisateur est déja enregistré."})
          }
          else{
          const payload ={
            email:Email
          }
          const token = await jwttoken.sign(payload, secretOrPrivateKey);
          const tokengenerated=token
                const mailOptions = {
                    from: 'younesmanita@gmail.com',
                    to: Email,
                    subject: 'Validation email',
                    text: `Bonjour ${firstName} ${lastName }, \n\nCeci est un message de validation email.Cliquez sur le lien suivant pour confirmer votre email: http://localhost:4200/confirmation/${tokengenerated}`,
            };

            await transporter.sendMail(mailOptions);

            const newcandidat = new precandidat({
                prenom: firstName,
                nom: lastName,
                email: Email,
            })
            const response =await newcandidat.save()
            res.status(200).json({ resultat: response, message: `Email envoyé et condidat ajouter avec succes `});
          }
          } 
          catch (error) {

            res.status(400).json({ error:` Erreur d'envoi de l'email : ${ error.message }` });
          }
};

exports.validationemail=async(req,res)=>{
      try {
        const decoded = await jwttoken.verify(req.params.token, secretOrPrivateKey)
        if (decoded){
          const precandidats = await precandidat.findOne({ email: decoded.email })
        if (precandidats){
          await precandidat.updateOne({ email: decoded.email }, { confirmer:true})
          return res.status(200).json("user confirmed with succes ") 
      }
      else{
        return res.status(402).json("user not exist")
      }
        }
        else{
        return res.status(401).json("invalid token")
        }
      }
       catch (error) {
      
        res.status(400).json(error)
      }
}
exports.sendmailpourlancementaudition=async(req,res)=>{
  try {
    console.log("heelo from front ");
    const allprecondidat=await precandidat.find({
      confirmer:true
    })
    allprecondidat.map(elem=>{
      transporter.sendMail({
        from: 'azzizzflash@gmail.com',
        to: elem.email,
        subject: 'Season Opening Announcement: Exciting Opportunities Await!',

        html: `<b>Bonjour cere  ${elem.nom} ${elem.prenom}! </b><br> 
 
 <b> nous somme ravis  de vous informer que la saison de cette années est ouverte vous pouvez maintenant inscrit dans notre platforme
  cliquer sur ce lien pour remplir votre condidature  </b><br>
  <b> lien a consulter :<b>  http://localhost:4200/condidat
`
      }),
        (err, succes) => {
          if (err) {
            console.log(err);
            return res.status(400).json(err)
          } 
            console.log(succes);
           return res.status(200).json("your mail has been send to  all candidat ")
          
        }
    })
    
  } catch (error) {
    console.log(error);
    res.status(400).json(error)
  }
}
exports.getaalprecandidat=async(req,res)=>{
  try { 
    const allprecandidat=await precandidat.find()
  
    res.status(200).json(allprecandidat)
    
  } catch (error) {
    res.status(400).json(error)
  }
}
