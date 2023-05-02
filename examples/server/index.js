const bodyParser = require('body-parser')
const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql2')

const db = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'root',
    database:"LandAllotment",
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))

app.listen(3001,()=>{
    console.log("server is running in port 3001")
})

app.get("/approved",(req,res)=>{
    const dbSel = 'select * from LandAllotment.ApprovedLandApplications;'
    db.query(dbSel,(error,result)=>{
        res.send(result)
    })

})

app.get("/auths",(req,res)=>{
    const dbSel = 'select * from LandAllotment.authorization;'
    db.query(dbSel,(error,result)=>{
        res.send(result)
    })
})