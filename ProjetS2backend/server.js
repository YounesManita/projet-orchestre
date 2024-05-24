const express=require('express')
const app=express()
const database=require("./config/database")
const routerprecandidat = require("./Routes/precandidatroute")
const routercandidat = require("./Routes/candidat")
const routerAudition = require("./Routes/AuditionGlobal")
const routerAuditionCandidat = require("./Routes/AuditionCandidat")
const cors = require('cors')

database()

app.use(express.json())
app.use("/precandidat", routerprecandidat)
app.use("/candidat", routercandidat)
app.use("/Audition", routerAudition)
app.use("/CandAud", routerAuditionCandidat)
app.use("/user", require("./Routes/UserRoute"))
app.use("/Oeuvre", require("./Routes/OeuvreRoute"))
app.use("/concert", require("./Routes/Concert"))
app.use("/conge", require("./Routes/CongéRoute"))
app.use("/repetition",require("./Routes/RepetitionRoute"))
app.use(cors())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", " ,content-type");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    
    next();
   
  });

const port=5000
app.listen(port,()=>{
    console.log(`server is runing at ${port}`);
})